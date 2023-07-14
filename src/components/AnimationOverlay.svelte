<script lang="ts">
	import { onMount } from 'svelte';
	import * as gpx from '../utils/gpx_schema';
	import * as maplibregl from 'maplibre-gl';
	import style, { MAPTILER_KEY } from './MapLibreStyle';
	import type { AnimationOverlayData } from './types';
	import { gpxType } from '../utils/gpx_schema';

	export let data: AnimationOverlayData;
	export let onClose: () => void;

	onMount(() => {
		const map = (window.map = new maplibregl.Map({
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
				exaggeration: 1
			});

			// add gpx line
			map.setCenter([data.trkseg.trkpt[0].lon, data.trkseg.trkpt[0].lat]);
			const gpxLine = {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						geometry: {
							type: 'LineString',
							coordinates: data.trkseg.trkpt.map((p: gpx.wptType) => [p.lon, p.lat])
						}
					}
				]
			};
			console.log(gpxLine.features[0].geometry.coordinates);
			map.addSource('line', {
				type: 'geojson',
				data: gpxLine
			});
			map.addLayer({
				id: 'gpx-line',
				type: 'line',
				source: 'line',
				layout: {
					'line-cap': 'round',
					'line-join': 'round'
				},
				paint: {
					'line-color': '#ed6498',
					'line-width': {
						base: 3,
						stops: [
							[12, 7],
							[15, 9],
							[18, 11]
						]
					},
					'line-opacity': 0.8
				}
			});
		});
	});
</script>

<svelte:head>
	<link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Nunito:wght@700&family=Roboto+Condensed:ital@1&family=Roboto:ital,wght@0,400;0,500;1,400&display=swap"
		rel="stylesheet"
	/></svelte:head
>

<div class="anim-over-wrapper">
	<div class="anim-over-inner">
		<div class="map-container">
			<div id="maplibre-animation-map" style="width: 100%; height: 100%;" />
		</div>
		<div class="anim-over-sidebar">a</div>
		<div class="anim-over-player-ctrl">ü</div>
	</div>
</div>

<style lang="scss">
	.anim-over-wrapper {
		position: absolute;
		z-index: 9999;
		width: 100vw;
		height: 100vh;
		background-color: white;

		.anim-over-inner {
			width: 100%;
			height: 100%;
			position: relative;
			overflow: hidden;
			.map-container {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
			}

			.anim-over-sidebar {
				position: absolute;
				top: 0;
				height: 100%;
				right: 0;
				width: 0;
				user-select: none;
			}
			.anim-over-player-ctrl {
				position: absolute;
				left: 0;
				bottom: 0;
				// transform: translateY(-100);
				width: 100%;
				height: 40px;
				user-select: none;
				background: rgba(26, 25, 41, 0.8);
			}
		}
	}

	// attribution styles
	:global(.maplibregl-ctrl) {
		background: none !important;
	}
	:global(.maplibregl-ctrl-attrib a) {
		color: white !important;
	}
	:global(.maplibregl-ctrl-group button) {
		background: white !important;
	}
</style>
