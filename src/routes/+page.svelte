<script lang="ts">
	import '../app.scss';
	import * as gpx from '../utils/gpx_schema';
	import L from 'leaflet';
	import { readGPXFromFile } from '../utils/GPXLoader';
	import LeafletMap from '../components/LeafletMap.svelte';

	let gpxFile: gpx.document;
	let setGPXFile = (f: gpx.document | null) => {
		if (f) gpxFile = f;
		console.log('loaded gpx file:', gpxFile);
	};

	const pointsFromSegment = (trkseg: gpx.trksegType): L.LatLngExpression[] => {
		if (trkseg.trkpt) {
			return trkseg.trkpt.map((pt) => {
				return [pt.lat, pt.lon] as L.LatLngExpression;
			});
		}
		return [];
	};
</script>

<div style="padding: 10px;">
	<h1>Analyze GPX</h1>
	<label for="file-input">Load GPX File</label>
	<input
		id="file-input"
		type="file"
		accept=".gpx"
		on:change={(e) => readGPXFromFile(e, setGPXFile)}
	/>
	{#if gpxFile && gpxFile.gpx.trk}
		{#each gpxFile.gpx.trk as trk}
			{#if trk.trkseg}
				{#each trk.trkseg as trkseg}
					<LeafletMap points={pointsFromSegment(trkseg)} />
				{/each}
			{/if}
		{/each}
	{/if}
</div>
