<script lang="ts">
	import '../app.scss';
	import * as gpx from '../utils/gpx_schema';
	import { readGPXFromFile } from '../utils/GPXLoader';
	import TrackView from '../components/TrackView.svelte';
	import AnimationOverlay from '../components/AnimationOverlay.svelte';

	let gpxFile: gpx.document | null;
	let setGPXFile = (f: gpx.document | null) => {
		gpxFile = null;
		setTimeout(() => {
			if (f) gpxFile = f;
			console.log('loaded gpx file:', gpxFile);
		}, 100);
	};
	let openAnimationEditor = (trk: gpx.trkType, segmentIndex: number) => {
		let trkseg = trk.trkseg![segmentIndex];
	};
</script>

<AnimationOverlay />
<div style="padding: 10px 30px; max-width: 1600px; margin: auto;">
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
			<br /><br /><br />
			<h3>{trk.name ?? 'Untitled'}</h3>
			{#if trk.link}
				{#each trk.link as link}
					<a href={link.href}>{link.text}</a>
				{/each}
			{/if}
			<p>{trk.desc ?? ''}</p>
			{#if trk.trkseg}
				{#each trk.trkseg as trkseg, segI}
					<button on:click={openAnimationEditor(trk, segI)}>{'<Make Animation>'}</button>
					<TrackView {trkseg} />
				{/each}
			{/if}
		{/each}
	{/if}
</div>
