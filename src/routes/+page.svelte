<script lang="ts">
	import '../app.scss';
	import { readGPXFromFile } from '../utils/GPXLoader';
	let gpxFile: String;
	let setGPXFile = (f: string) => {
		gpxFile = f;
	};
</script>

<h1>Analyze GPX</h1>
<label for="">Load GPX File</label>
<input type="file" accept=".gpx" on:change={(e) => readGPXFromFile(e, setGPXFile)} />
{gpxFile}
