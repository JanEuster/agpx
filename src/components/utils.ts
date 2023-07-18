import maplibreGl from 'maplibre-gl';
import * as gpx from '../utils/gpx_schema';

/**
 * returns duration in hours
 */
export const getTripDuration = (trkpts: gpx.wptType[]): number => {
	const millis =
		new Date(trkpts[trkpts.length - 1].time!).getTime() - new Date(trkpts[0].time!).getTime();
	const hours = millis / 1000 / 60 / 60;
	return hours;
};

export const getTripSteps = (trkpts: gpx.wptType[]): [number, gpx.wptType][] => {
	const steps: [number, gpx.wptType][] = [];
	const duration =
		new Date(trkpts[trkpts.length - 1].time!).getTime() - new Date(trkpts[0].time!).getTime();

	trkpts.forEach((pt) => {
		const ptTimeOffset = new Date(pt.time!).getTime() - new Date(trkpts[0].time!).getTime();
		const step = ptTimeOffset / duration;
		steps.push([step, pt]);
	});
	return steps;
};

const triangleArea = (tri: [number, number][]): number => {
	const x1 = tri[0][0];
	const y1 = tri[0][1];
	const x2 = tri[1][0];
	const y2 = tri[1][1];
	const x3 = tri[2][0];
	const y3 = tri[2][1];
	return Math.abs(0.5 * ((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)));
};

/**
 * Visvalingam Algorithm simplifys a geometry based on the smallest perceptible change:
 *  - for each point a triangle is constructed with the two neighboring points
 * - for each iteration of the alogrithm, the point associated with the smalled area triangle is removed
 * and triangle areas for neighboring point are reevaluated
 *
 * - optional threshold will stop simplifying when a certain smallest triangle area threshold is reached
 *
 * https://bost.ocks.org/mike/simplify/
 */
export const visvalingamSimplify = (
	line: gpx.wptType[],
	iterations: number,
	threshold?: number | undefined
): gpx.wptType[] => {
	console.log('Visvalingam iterations to run:', iterations);
	console.log('initial line points:', line.length);

	const newLine = line.slice(0);
	const triangles = [];

	for (let i = 1; i < line.length - 2; i++) {
		triangles.push(
			triangleArea([
				[line[i - 1].lon as number, line[i - 1].lat as number],
				[line[i].lon as number, line[i].lat as number],
				[line[i + 1].lon as number, line[i + 1].lat as number]
			])
		);
	}
	for (let i = 0; i < iterations; i++) {
		const minIndexTriangle: number = triangles.indexOf(Math.min(...triangles));
		const minIndex = minIndexTriangle + 1;
		const smallestArea = triangles[minIndexTriangle];
		if (threshold && smallestArea > threshold) {
			console.log(`threshold(${threshold}) reached - returning`);
			return newLine;
		}
		triangles.splice(minIndexTriangle - 1, 1);
		newLine.splice(minIndex, 1);
		// console.log(smallestArea, i);

		// recalculate neighboring triangles
		if (minIndex - 1 > 0) {
			triangles[minIndexTriangle - 1] = triangleArea([
				[newLine[minIndex - 2].lon as number, newLine[minIndex - 2].lat as number],
				[newLine[minIndex - 1].lon as number, newLine[minIndex - 1].lat as number],
				[newLine[minIndex].lon as number, newLine[minIndex].lat as number]
			]);
		}
		if (minIndex < newLine.length - 1) {
			triangles[minIndexTriangle] = triangleArea([
				[newLine[minIndex - 1].lon as number, newLine[minIndex - 1].lat as number],
				[newLine[minIndex].lon as number, newLine[minIndex].lat as number],
				[newLine[minIndex + 1].lon as number, newLine[minIndex + 1].lat as number]
			]);
		}
	}
	console.log('simplified to length', newLine.length, 'from', line.length);
	return newLine;
};

/**
 *
 */

export class CustomControl extends maplibreGl.Evented implements maplibregl.IControl {
	img: string;
	label: string;
	callback: () => void;
	constructor(options: { img: string; label: string; callback: () => void }) {
		super();
		this.callback = options.callback;
		this.img = options.img;
		this.label = options.label;
	}
	onAdd(map: maplibregl.Map): HTMLElement {
		const div = document.createElement('div');
		div.className = 'maplibregl-ctrl maplibregl-ctrl-group';
		div.innerHTML = `<button>
	<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 20px;"><title>${this.label}</title><image x="2" y="2" width="20" height="20" href="${this.img}" /></svg>
	</button>`;
		div.addEventListener('contextmenu', (e) => e.preventDefault());
		div.addEventListener('click', () => this.callback());

		return div;
	}
	onRemove() {
		return;
	}
}
