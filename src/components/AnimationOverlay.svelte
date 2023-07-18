<script lang="ts">
	import { onMount } from 'svelte';
	import * as gpx from '../utils/gpx_schema';
	import * as maplibregl from 'maplibre-gl';
	import style, { MAPTILER_KEY } from './MapLibreStyle';
	import type { AnimationOverlayData } from './types';
	import { getTripSteps, getTripDuration, visvalingamSimplify, CustomControl } from './utils';

	export let data: AnimationOverlayData;
	export let onClose: () => void;

	onMount(() => {
		const map = new maplibregl.Map({
			style: style,
			container: 'maplibre-animation-map',
			center: [6.85684, 45.83595],
			zoom: 9
		});

		// in hours
		const duration = getTripDuration(data.trkseg.trkpt!);
		// in seconds
		const panDuration = (duration * 3600) / 12000;
		const simplifiedTrkPts = visvalingamSimplify(
			data.trkseg.trkpt!,
			Math.round(data.trkseg.trkpt!.length * 0.9),
			0.000005
		);
		const smoothedTrkPts = simplifiedTrkPts;
		const timeSteps = getTripSteps(smoothedTrkPts);

		map.on('load', () => {
			const routeStart: [number, number] = [
				data.trkseg.trkpt![0].lon as number,
				data.trkseg.trkpt![0].lat as number
			];
			const routeEnd: [number, number] = [
				data.trkseg.trkpt![data.trkseg.trkpt!.length - 1].lon as number,
				data.trkseg.trkpt![data.trkseg.trkpt!.length - 1].lat as number
			];

			const playAnimation = () => {
				map.jumpTo({ center: routeStart });
				setTimeout(async () => {
					await new Promise((res) => {
						map.zoomTo(15.5, { duration: 1000 });
						setTimeout(res, 1000);
					});
					for (const step of timeSteps) {
						console.log(step);
						const duration = step[0] * panDuration * 1000;
						map.panTo([step[1].lon as number, step[1].lat as number], {
							duration: duration,
							essential: true,
							easing: (t) => t
						});
						await new Promise((res) => {
							setTimeout(res, duration);
						});
					}
				}, 2000);
			};

			const recordAnimation = () => {
				playAnimation();
			};

			setTimeout(() => {
				console.log('flyTo');
				map.flyTo({
					center: routeStart,
					zoom: 17,
					bearing: -90,
					pitch: 40,
					animate: true,
					essential: true,
					duration: 5000
				});
			}, 5000);

			map.addControl(
				new maplibregl.NavigationControl({
					visualizePitch: true,
					showZoom: true,
					showCompass: true
				})
			);
			map.addControl(
				new maplibregl.TerrainControl({
					source: 'terrain',
					exaggeration: 1
				})
			);
			map.addControl(
				new maplibregl.FullscreenControl({
					container: document.getElementsByClassName('anim-over-wrapper')[0] as HTMLElement
				})
			);

			map.addControl(
				new CustomControl({
					callback: () => map.flyTo({ center: routeStart }),
					img: '/start_bw.png',
					label: 'Go to Start'
				})
			);
			map.addControl(
				new CustomControl({
					callback: () => map.flyTo({ center: routeEnd }),
					img: '/finish_bw.png',
					label: 'Go to Finish'
				})
			);
			map.addControl(
				new CustomControl({
					callback: () => playAnimation(),
					img: '/play.png',
					label: 'Play Animation'
				})
			);
			map.addControl(
				new CustomControl({
					callback: () => recordAnimation(),
					img: '/record.png',
					label: 'Record Animation Video'
				})
			);
			map.addControl(
				new CustomControl({
					callback: () => onClose(),
					img: '/exit.png',
					label: 'Close Animation View'
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
			const gpxLine = {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						geometry: {
							type: 'LineString',
							coordinates: data.trkseg.trkpt!.map((p: gpx.wptType) => [p.lon, p.lat])
							// coordinates: simplifiedTrkPts.map((p: gpx.wptType) => [p.lon, p.lat])
						}
					}
				]
			};
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

			// line start and finish icons
			const start_marker = {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {
							icon: 'finish',
							iconSize: [40, 40]
						},
						geometry: {
							type: 'Point',
							coordinates: routeStart
						}
					}
				]
			};

			map.addSource('start_marker', {
				type: 'geojson',
				data: start_marker
			});
			const finish_marker = {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {
							icon: 'finish',
							iconSize: [40, 40]
						},
						geometry: {
							type: 'Point',
							coordinates: routeEnd
						}
					}
				]
			};

			map.addSource('finish_marker', {
				type: 'geojson',
				data: finish_marker
			});
			// line start icon
			map.loadImage('/start.png', (error, image) => {
				if (error) throw error;
				map.addImage('start_icon', image!);
				map.addLayer({
					id: 'start_marker',
					type: 'symbol',
					source: 'start_marker',
					layout: {
						'icon-image': 'start_icon',
						'icon-size': 0.5
					}
				});
			});
			// line finish icon
			map.loadImage('/finish.png', (error, image) => {
				if (error) throw error;
				map.addImage('finish_icon', image!);
				map.addLayer({
					id: 'finish_marker',
					type: 'symbol',
					source: 'finish_marker',
					layout: {
						'icon-image': 'finish_icon',
						'icon-size': 0.5
					}
				});
			});
		});
	});
</script>

<svelte:head>
	<link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Nunito:wght@700&family=Roboto+Condensed:ital,wght@1,400;1,700&family=Roboto:ital,wght@0,400;0,500;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

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
				height: 60px;
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
