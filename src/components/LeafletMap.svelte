<script lang="ts">
	import { onMount } from 'svelte';
	import L from 'leaflet';

	let generalMarkerOptions: L.CircleMarkerOptions = {
		color: 'black',
		fillColor: 'white',
		fillOpacity: 1,
		radius: 5
	};
	let endMarkerOptions: L.CircleMarkerOptions = {
		color: 'black',
		fillColor: 'white',
		fillOpacity: 1,
		radius: 10
	};

	export let points: L.LatLngExpression[];

	onMount(() => {
		let map = L.map('map').setView(points[0], 13);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		L.polyline(points, { color: 'black' }).addTo(map);
		// points.slice(1, -1).forEach((p) => {
		// 	L.circleMarker(p, generalMarkerOptions).addTo(map);
		// });
		L.circleMarker(points[0], endMarkerOptions).addTo(map);
		L.circleMarker(points[points.length - 1], endMarkerOptions).addTo(map);
	});
</script>

<div id="map" class="map" />

<style lang="scss">
	.map {
		min-height: 100px;
		height: 50vmin;
	}
</style>
