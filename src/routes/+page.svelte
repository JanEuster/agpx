<script lang="ts">
	import '../app.scss';
	import * as gpx from '../utils/gpx_schema';
	import { readGPXFromFile } from '../utils/GPXLoader';
	import TrackSegmentView from '../components/TrackSegmentView.svelte';

	let gpxFile: gpx.document | null;
	let setGPXFile = (f: gpx.document | null) => {
		gpxFile = null;
		setTimeout(() => {
			if (f) gpxFile = f;
			console.log('loaded gpx file:', gpxFile);
		}, 100);
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
					<TrackSegmentView {trkseg} />
				{/each}
			{/if}
		{/each}
	{/if}
</div>
