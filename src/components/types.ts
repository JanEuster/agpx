import * as gpx from '../utils/gpx_schema';

export type AnimationOverlayData = {
	trk: gpx.trkType;
	segIndex: number;
	trkseg: gpx.trksegType;
};
