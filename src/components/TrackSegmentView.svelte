<script lang="ts">
	import * as gpx from '../utils/gpx_schema';
	import L from 'leaflet';
	import LeafletMap from '../components/LeafletMap.svelte';

	const pointsFromSegment = (): L.LatLngExpression[] => {
		if (trkseg.trkpt) {
			return trkseg.trkpt.map((pt) => {
				return [pt.lat, pt.lon] as L.LatLngExpression;
			});
		}
		return [];
	};
	const moveSlider = (e: MouseEvent) => {
		if (e.buttons > 0) {
			let x = e.clientX - slider.offsetLeft;
			if (x < 12) {
				percentage = 0;
			} else if (x > slider.offsetWidth - 12) {
				percentage = 100;
			} else {
				percentage = ((x - 12) / (slider.offsetWidth - 24)) * 100;
			}
			sliderKnob.style.transform = `translateX(${percentage}%)`;

			// set selected
			selected = Math.floor((percentage / 100) * (points.length - 1));
		}
	};
	const prevSelected = (e: MouseEvent) => {
		selected = Math.max(0, selected - 1);
	};
	const nextSelected = (e: MouseEvent) => {
		selected = Math.min(points.length - 1, selected + 1);
	};

	export let trkseg: gpx.trksegType;

	let points = pointsFromSegment();

	let percentage: number = 0;
	let selected: number = 0;
	let slider: HTMLDivElement;
	let sliderKnob: HTMLDivElement;
</script>

<div>
	<LeafletMap {points} {selected} />
	<div>
		<button on:click={prevSelected}>{'<'}</button>
		<button on:click={nextSelected}>{'>'}</button>
	</div>
	<div class="slider" on:mousedown={moveSlider} on:mousemove={moveSlider} bind:this={slider}>
		<div class="slider-knob" bind:this={sliderKnob} style="transform: translateX(0%);" />
	</div>
	<div class="selected-point">
		{#if trkseg.trkpt}
			<ul>
				{#each Object.entries(trkseg.trkpt[selected]) as attr, i}
					<li>{i} - {attr[0]}: {attr[1]}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style lang="scss">
	.slider {
		margin-top: 10px;
		width: 100%;
		height: 32px;
		position: relative;
		overflow: hidden;

		.slider-knob {
			position: relative;
			top: 50%;
			left: 12px;
			width: calc(100% - 24px);
			height: 24px;
			z-index: 1;
			&::after {
				content: '';
				position: absolute;
				top: -10px;
				left: 0;
				height: 100%;
				aspect-ratio: 1;
				background: white;
				border: 2px solid black;
				border-radius: 50%;
				transform: translateX(-50%);
			}
		}

		&::after {
			position: absolute;
			top: 50%;
			left: 12px;
			width: calc(100% - 24px);
			height: 4px;
			background: black;
			border-radius: 2px;
			content: '';
		}
	}

	.selected-point {
		padding: 10px;
		ul {
			list-style: none;
		}
	}
</style>
