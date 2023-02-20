<script lang="ts">
	import '../app.scss';
	import * as gpx from '../utils/gpx_schema';
	import { readGPXFromFile } from '../utils/GPXLoader';

	let gpxFile: gpx.document;
	let setGPXFile = (f: gpx.document | null) => {
		if (f) gpxFile = f;
		console.log('loaded gpx file:', gpxFile);
	};
</script>

<h1>Analyze GPX</h1>
<label for="">Load GPX File</label>
<input type="file" accept=".gpx" on:change={(e) => readGPXFromFile(e, setGPXFile)} />
{gpxFile}
