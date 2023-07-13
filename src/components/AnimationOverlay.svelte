<script lang="ts">
	import { onMount } from 'svelte';
	import * as maplibregl from 'maplibre-gl';
	import { map } from 'leaflet';
	import style, { MAPTILER_KEY } from './MapLibreStyle';

	onMount(() => {
		const map = (window.map = new maplibregl.Map({
			// style: {
			// 	version: 8,
			// 	sources: {
			// 		osm: {
			// 			type: 'raster',
			// 			tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
			// 			tileSize: 256,
			// 			attribution: '&copy; OpenStreetMap Contributors',
			// 			maxzoom: 19
			// 		},
			// 		satellite: {
			// 			type: 'raster',
			// 			tiles: [`https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`],
			// 			tileSize: 512,
			// 			maxzoom: 19
			// 		}
			// 		// Use a different source for terrain and hillshade layers, to improve render quality
			// 		// terrainSource: {
			// 		// 	type: 'raster-dem',
			// 		// 	// url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
			// 		//   url: `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${MAPTILER_KEY}`,
			// 		// 	tileSize: 256
			// 		// },
			// 		// hillshadeSource: {
			// 		// 	type: 'raster-dem',
			// 		// 	url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
			// 		// 	tileSize: 256
			// 		// }
			// 	},
			// 	layers: [
			// 		{
			// 			id: 'satellite',
			// 			type: 'raster',
			// 			source: 'satellite'
			// 		}
			// 		// {
			// 		// 	id: 'hills',
			// 		// 	type: 'hillshade',
			// 		// 	source: 'hillshadeSource',
			// 		// 	layout: { visibility: 'visible' },
			// 		// 	paint: { 'hillshade-shadow-color': '#473B24' }
			// 		// }
			// 	]
			// 	// terrain: {
			// 	// 	source: 'terrainSource',
			// 	// 	exaggeration: 1
			// 	// }
			// },
			style: style,
			container: 'maplibre-animation-map',
			center: [6.85684, 45.83595],
			zoom: 9
		}));
		map.on('load', () => {
			map.addControl(
				new maplibregl.NavigationControl({
					visualizePitch: true,
					showZoom: true,
					showCompass: true
				})
			);

			map.addSource('terrain', {
				type: 'raster-dem',
				url: `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${MAPTILER_KEY}`
			});
			map.setTerrain({
				source: 'terrain',
				exaggeration: 2.5
			});
		});
	});
</script>

<svelte:head>
	<link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
</svelte:head>

<div class="anim-over-wrapper">
	<div class="anim-over-inner">
		<div class="map-container">
			<div id="maplibre-animation-map" style="width: 100%; aspect-ratio: 16/9;" />
		</div>
		<div class="anim-over-sidebar">a</div>
		<div class="anim-over-player-ctrl">ü</div>
	</div>
</div>

<style lang="scss">
	.anim-over-wrapper {
		position: absolute;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		padding: 4vmin;
		background-color: rgba(0, 0, 0, 0.25);
		cursor: pointer;

		.anim-over-inner {
			width: 100%;
			height: 100%;
			background-color: white;
			outline: 1px solid black;
			z-index: 5;
			display: grid;
			grid-template-columns: 4fr 1fr;
			grid-template-rows: 1fr 40px;

			.map-container {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
