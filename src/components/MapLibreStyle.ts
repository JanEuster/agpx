import * as maplibregl from 'maplibre-gl';
export const MAPTILER_KEY = 'JuQoY2K9vHDiqC2SXZ10';

const style = {
	version: 8,
	id: 'outdoor',
	name: 'Outdoor',
	sources: {
		satellite: {
			type: 'raster',
			tiles: [`https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`],
			tileSize: 256,
			attribution: '&copy; OpenStreetMap Contributors',
			maxzoom: 19
		},
		outdoor: {
			url: `https://api.maptiler.com/tiles/satellite/tiles.json?key=${MAPTILER_KEY}`,
			type: 'vector'
		},
		contours: {
			url: `https://api.maptiler.com/tiles/contours/tiles.json?key=${MAPTILER_KEY}`,
			type: 'vector'
		},
		'terrain-rgb': {
			url: `https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=${MAPTILER_KEY}`,
			tileSize: 512,
			type: 'raster-dem'
		},
		maptiler_planet: {
			url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`,
			type: 'vector'
		}
	},
	layers: [
		{
			id: 'satellite',
			type: 'raster',
			source: 'satellite'
		},
		// {
		// 	id: 'background',
		// 	type: 'background',
		// 	minzoom: 0,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'background-color': {
		// 			stops: [
		// 				[5, 'rgba(239, 245, 231, 1)'],
		// 				[14, 'rgba(242, 243, 242, 1)']
		// 			]
		// 		}
		// 	}
		// },
		// {
		// 	id: 'landcover_grass',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landcover',
		// 	minzoom: 9,
		// 	maxzoom: 24,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(139, 204, 72, 1)',
		// 		'fill-opacity': 0.3,
		// 		'fill-antialias': false
		// 	},
		// 	metadata: {},
		// 	filter: ['any', ['==', 'class', 'grass']]
		// },
		// {
		// 	id: 'landcover_wood',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landcover',
		// 	minzoom: 9,
		// 	maxzoom: 24,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': {
		// 			stops: [
		// 				[6, 'rgba(211, 238, 188, 1)'],
		// 				[16, 'rgba(179, 216, 162, 1)']
		// 			]
		// 		},
		// 		'fill-opacity': 1,
		// 		'fill-antialias': true,
		// 		'fill-translate': [1, 1]
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['==', 'class', 'wood']]
		// },
		// {
		// 	id: 'landcover_ice',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landcover',
		// 	minzoom: 9,
		// 	maxzoom: 24,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(255, 255, 255, 1)',
		// 		'fill-opacity': 1,
		// 		'fill-antialias': false
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['==', 'class', 'ice']]
		// },
		// {
		// 	id: 'landcover_sand',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landcover',
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(249, 248, 152, 1)',
		// 		'fill-opacity': 0.4,
		// 		'fill-antialias': false
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['in', 'class', 'sand']]
		// },
		// {
		// 	id: 'globallandcover_grass',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'globallandcover',
		// 	minzoom: 0,
		// 	maxzoom: 9,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(200, 232, 176, 1)',
		// 		'fill-opacity': {
		// 			stops: [
		// 				[8, 0.6],
		// 				[9, 0.2]
		// 			]
		// 		}
		// 	},
		// 	filter: ['all', ['==', 'class', 'grass']]
		// },
		// {
		// 	id: 'globallandcover_scrub',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'globallandcover',
		// 	minzoom: 0,
		// 	maxzoom: 9,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(224, 230, 202, 1)',
		// 		'fill-opacity': 1
		// 	},
		// 	filter: ['all', ['==', 'class', 'scrub']]
		// },
		// {
		// 	id: 'globallandcover_tree',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'globallandcover',
		// 	minzoom: 0,
		// 	maxzoom: 9,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(216, 236, 208, 1)',
		// 		'fill-opacity': 1
		// 	},
		// 	filter: ['all', ['==', 'class', 'tree']]
		// },
		// {
		// 	id: 'globallandcover_forest',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'globallandcover',
		// 	minzoom: 0,
		// 	maxzoom: 9,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(200, 232, 176, 1)',
		// 		'fill-opacity': 1
		// 	},
		// 	filter: ['all', ['==', 'class', 'forest']]
		// },
		// {
		// 	id: 'globallandcover_ice',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'globallandcover',
		// 	minzoom: 0,
		// 	maxzoom: 9,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(255, 255, 255, 0.9)',
		// 		'fill-opacity': 1
		// 	},
		// 	filter: ['all', ['==', 'class', 'snow']]
		// },
		// {
		// 	id: 'landuse_residential',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landuse',
		// 	maxzoom: 16,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': {
		// 			stops: [
		// 				[6, 'rgba(182, 182, 182, 1)'],
		// 				[16, 'rgba(226, 226, 226, 1)']
		// 			]
		// 		},
		// 		'fill-opacity': 0.3
		// 	},
		// 	filter: [
		// 		'all',
		// 		['==', '$type', 'Polygon'],
		// 		['in', 'class', 'residential', 'suburb', 'neighbourhood']
		// 	]
		// },
		// {
		// 	id: 'landuse_industrial',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landuse',
		// 	minzoom: 10,
		// 	maxzoom: 22,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': {
		// 			stops: [
		// 				[6, 'rgba(229, 219, 199, 1)'],
		// 				[12, 'rgba(246, 236, 225, 1)']
		// 			]
		// 		},
		// 		'fill-opacity': 0.5
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'any',
		// 		['==', 'class', 'industrial'],
		// 		['==', 'class', 'commercial'],
		// 		['==', 'class', 'retail'],
		// 		['==', 'class', 'stadium'],
		// 		['==', 'class', 'quarry']
		// 	]
		// },
		// {
		// 	id: 'landuse_cemetery',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landuse',
		// 	minzoom: 10,
		// 	maxzoom: 22,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(161, 216, 103, 1)',
		// 		'fill-opacity': 0.5
		// 	},
		// 	metadata: {},
		// 	filter: ['==', 'class', 'cemetery']
		// },
		// {
		// 	id: 'landuse_hospital',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landuse',
		// 	minzoom: 10,
		// 	maxzoom: 22,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(244, 222, 236, 1)',
		// 		'fill-opacity': 0.5
		// 	},
		// 	metadata: {},
		// 	filter: ['==', 'class', 'hospital']
		// },
		// {
		// 	id: 'landuse_military',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'landuse',
		// 	minzoom: 10,
		// 	maxzoom: 24,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(161, 170, 136, 1)',
		// 		'fill-opacity': {
		// 			stops: [
		// 				[11, 0.25],
		// 				[16, 0.15],
		// 				[18, 0]
		// 			]
		// 		},
		// 		'fill-antialias': true,
		// 		'fill-outline-color': 'rgba(214, 87, 0, 1)'
		// 	},
		// 	filter: ['all', ['==', 'class', 'military']]
		// },
		// {
		// 	id: 'hillshade',
		// 	type: 'hillshade',
		// 	source: 'terrain-rgb',
		// 	minzoom: 3,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'hillshade-accent-color': 'rgba(216, 232, 207, 1)',
		// 		'hillshade-exaggeration': {
		// 			stops: [
		// 				[6, 0.4],
		// 				[14, 0.35],
		// 				[18, 0.25]
		// 			]
		// 		},
		// 		'hillshade-shadow-color': 'rgba(107, 101, 100, 1)',
		// 		'hillshade-highlight-color': 'rgba(183, 169, 162, 1)'
		// 	}
		// },
		// {
		// 	id: 'parks',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'park',
		// 	minzoom: 6,
		// 	maxzoom: 24,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': {
		// 			stops: [
		// 				[6, 'rgba(204, 253, 204, 0.35)'],
		// 				[14, 'rgba(157, 236, 156, 0.25)'],
		// 				[18, 'rgba(157, 236, 156, 0.25)'],
		// 				[22, 'rgba(157, 236, 156, 0)']
		// 			]
		// 		},
		// 		'fill-antialias': true,
		// 		'fill-outline-color': 'rgba(0, 255, 6, 1)'
		// 	}
		// },
		{
			id: 'contour_index',
			type: 'line',
			source: 'contours',
			'source-layer': 'contour',
			minzoom: 10,
			layout: {
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(174, 135, 77, 1)',
				'line-width': {
					stops: [
						[10, 0.8],
						[14, 1.3]
					]
				},
				'line-opacity': {
					stops: [
						[10, 0.3],
						[14, 0.25]
					]
				}
			},
			filter: ['all', ['>', 'height', 0], ['in', 'nth_line', 10, 5]]
		},
		{
			id: 'contour',
			type: 'line',
			source: 'contours',
			'source-layer': 'contour',
			minzoom: 11,
			layout: {
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(174, 135, 77, 1)',
				'line-width': 0.8,
				'line-opacity': {
					stops: [
						[10, 0.2],
						[14, 0.2]
					]
				}
			},
			filter: ['all', ['!in', 'nth_line', 10, 5], ['>', 'height', 0]]
		},
		{
			id: 'contour_label',
			type: 'symbol',
			source: 'contours',
			'source-layer': 'contour',
			layout: {
				'text-font': ['Noto Sans Italic'],
				'text-size': {
					base: 1,
					stops: [
						[15, 9.5],
						[20, 12]
					]
				},
				'text-field': '{height}',
				visibility: 'visible',
				'text-padding': 10,
				'symbol-placement': 'line',
				'symbol-avoid-edges': true,
				'text-allow-overlap': false,
				'text-ignore-placement': false,
				'text-rotation-alignment': 'map'
			},
			paint: {
				'text-color': 'rgba(145, 132, 108, 1)',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255, 254, 237, 1)',
				'text-halo-width': 0.5
			},
			metadata: {},
			filter: ['all', ['==', '$type', 'LineString'], ['in', 'nth_line', 10, 5], ['>', 'height', 0]]
		},
		{
			id: 'waterway_tunnel',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'waterway',
			minzoom: 0,
			layout: {
				'line-cap': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(175, 215, 252, 1)',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[20, 12]
					]
				},
				'line-dasharray': [2, 4]
			},
			filter: ['all', ['==', 'brunnel', 'tunnel']]
		},
		// {
		// 	id: 'waterway_river',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'waterway',
		// 	layout: {
		// 		'line-cap': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': {
		// 			stops: [
		// 				[6, 'rgba(164, 210, 244, 1)'],
		// 				[14, 'rgba(176, 218, 255, 1)']
		// 			]
		// 		},
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[11, 1],
		// 				[20, 18]
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['==', 'class', 'river'],
		// 		['!=', 'brunnel', 'tunnel'],
		// 		['!=', 'intermittent', 1]
		// 	]
		// },
		// {
		// 	id: 'waterway_river_intermittent',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'waterway',
		// 	layout: {
		// 		'line-cap': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': {
		// 			stops: [
		// 				[6, 'rgba(164, 210, 244, 1)'],
		// 				[9, 'rgba(176, 218, 255, 1)']
		// 			]
		// 		},
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[11, 1],
		// 				[20, 18]
		// 			]
		// 		},
		// 		'line-dasharray': [2, 1.6]
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['==', 'class', 'river'],
		// 		['!=', 'brunnel', 'tunnel'],
		// 		['==', 'intermittent', 1]
		// 	]
		// },
		// {
		// 	id: 'waterway_other',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'waterway',
		// 	layout: {
		// 		'line-cap': 'butt',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(175, 215, 252, 1)',
		// 		'line-width': {
		// 			base: 1.3,
		// 			stops: [
		// 				[13, 0.5],
		// 				[20, 12]
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['!=', 'class', 'river'],
		// 		['!=', 'brunnel', 'tunnel'],
		// 		['!=', 'intermittent', 1]
		// 	]
		// },
		// {
		// 	id: 'waterway_other_intermittent',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'waterway',
		// 	layout: {
		// 		'line-cap': 'butt',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(175, 215, 252, 1)',
		// 		'line-width': {
		// 			base: 1.3,
		// 			stops: [
		// 				[13, 0.5],
		// 				[20, 12]
		// 			]
		// 		},
		// 		'line-dasharray': [4, 3]
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['!=', 'class', 'river'],
		// 		['!=', 'brunnel', 'tunnel'],
		// 		['==', 'intermittent', 1]
		// 	]
		// },
		// {
		// 	id: 'water',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'water',
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': {
		// 			stops: [
		// 				[6, 'rgba(164, 210, 244, 1)'],
		// 				[14, 'rgba(176, 218, 255, 1)']
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['!=', 'intermittent', 1]]
		// },
		// {
		// 	id: 'water_intermittent',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'water',
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(191, 216, 249, 1)',
		// 		'fill-opacity': 1
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['==', 'intermittent', 1]]
		// },
		// {
		// 	id: 'aeroway_fill',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'aeroway',
		// 	minzoom: 11,
		// 	paint: {
		// 		'fill-color': 'rgba(228, 228, 228, 1)',
		// 		'fill-opacity': 1
		// 	},
		// 	metadata: {},
		// 	filter: ['==', '$type', 'Polygon']
		// },
		{
			id: 'aeroway_runway',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'aeroway',
			minzoom: 11,
			paint: {
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-width': {
					base: 1.2,
					stops: [
						[11, 3],
						[20, 16]
					]
				}
			},
			metadata: {},
			filter: ['all', ['==', '$type', 'LineString'], ['==', 'class', 'runway']]
		},
		{
			id: 'aeroway_taxiway',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'aeroway',
			minzoom: 11,
			paint: {
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-width': {
					base: 1.2,
					stops: [
						[11, 0.5],
						[20, 6]
					]
				}
			},
			metadata: {},
			filter: ['all', ['==', '$type', 'LineString'], ['==', 'class', 'taxiway']]
		},
		{
			id: 'ferry',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'transportation',
			layout: {
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(136, 166, 214, 1)',
				'line-width': 1.1,
				'line-dasharray': [2, 2]
			},
			filter: ['all', ['in', 'class', 'ferry']]
		},
		// {
		// 	id: 'tunnel_road_path',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	minzoom: 13,
		// 	layout: {
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(96, 53, 26, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[14, 0.5],
		// 				[16, 1],
		// 				[20, 1.5]
		// 			]
		// 		},
		// 		'line-opacity': 0.5,
		// 		'line-dasharray': [2, 2]
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['==', '$type', 'LineString'],
		// 		['in', 'class', 'path', 'pedestrian'],
		// 		['==', 'brunel', 'tunnel']
		// 	]
		// },
		// {
		// 	id: 'tunnel_road_minor',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	layout: {
		// 		'line-cap': 'round',
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(255, 255, 255, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[12, 0.5],
		// 				[18, 11],
		// 				[22, 13]
		// 			]
		// 		},
		// 		'line-opacity': 0.4
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['in', 'brunnel', 'tunnel'],
		// 		['in', 'class', 'minor', 'service', 'track', 'pier', 'raceway']
		// 	]
		// },
		// {
		// 	id: 'tunnel_road_major',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	layout: {
		// 		'line-cap': 'round',
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(255, 255, 255, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[9, 0],
		// 				[14, 3],
		// 				[18, 12],
		// 				[22, 14]
		// 			]
		// 		},
		// 		'line-opacity': 0.4
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['in', 'class', 'primary', 'trunk', 'secondary', 'tertiary'],
		// 		['in', 'brunnel', 'tunnel']
		// 	]
		// },
		// {
		// 	id: 'tunnel_motorway',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	minzoom: 5,
		// 	layout: {
		// 		'line-cap': 'round',
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(255, 255, 255, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[5, 0.5],
		// 				[7, 1],
		// 				[14, 5],
		// 				[18, 16],
		// 				[22, 18]
		// 			]
		// 		},
		// 		'line-opacity': 0.3
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['in', 'brunnel', 'tunnel'], ['==', 'class', 'motorway']]
		// },
		{
			id: 'tunnel_rail',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'transportation',
			layout: {
				visibility: 'visible'
			},
			paint: {
				'line-color': {
					stops: [
						[8, 'rgba(127, 127, 127, 1)'],
						[12, 'rgba(156, 156, 156, 1)'],
						[14, 'rgba(102, 102, 102, 1)'],
						[16, 'rgba(61, 61, 61, 1)']
					]
				},
				'line-width': {
					base: 1.4,
					stops: [
						[8, 0.4],
						[15, 0.75],
						[20, 3]
					]
				},
				'line-opacity': 0.3
			},
			metadata: {},
			filter: ['all', ['in', 'brunnel', 'tunnel'], ['==', 'class', 'rail']]
		},
		// {
		// 	id: 'road_area_bridge',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(242, 242, 242, 1)',
		// 		'fill-opacity': 0.5,
		// 		'fill-antialias': true,
		// 		'fill-outline-color': 'rgba(242, 242, 242, 1)'
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['==', '$type', 'Polygon'], ['==', 'brunnel', 'bridge']]
		// },
		// {
		// 	id: 'road_area_pier',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': 'rgba(242, 243, 242, 1)',
		// 		'fill-antialias': true
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['==', '$type', 'Polygon'], ['==', 'class', 'pier']]
		// },
		// {
		// 	id: 'road_path_casing',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	minzoom: 13,
		// 	layout: {
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-blur': 2,
		// 		'line-color': 'rgba(252, 251, 236, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[14, 1],
		// 				[16, 4.6],
		// 				[20, 6.4]
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['==', '$type', 'LineString'], ['in', 'class', 'path', 'pedestrian']]
		// },
		// {
		// 	id: 'road_path',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	minzoom: 13,
		// 	layout: {
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(96, 53, 26, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[14, 0.5],
		// 				[16, 1.3],
		// 				[20, 2]
		// 			]
		// 		},
		// 		'line-dasharray': [1, 1]
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['==', '$type', 'LineString'],
		// 		['in', 'class', 'path', 'pedestrian'],
		// 		['!=', 'brunel', 'tunnel']
		// 	]
		// },
		// {
		// 	id: 'road_minor',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	layout: {
		// 		'line-cap': 'round',
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(255, 255, 255, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[12, 0.5],
		// 				[18, 11],
		// 				[22, 13]
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['!in', 'brunnel', 'tunnel'],
		// 		['in', 'class', 'minor', 'service', 'track', 'pier', 'raceway']
		// 	]
		// },
		// {
		// 	id: 'road_major',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	layout: {
		// 		'line-cap': 'round',
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(255, 255, 255, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[9, 0],
		// 				[14, 3],
		// 				[18, 12],
		// 				[22, 14]
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: [
		// 		'all',
		// 		['in', 'class', 'primary', 'trunk', 'secondary', 'tertiary'],
		// 		['!=', 'brunnel', 'tunnel']
		// 	]
		// },
		// {
		// 	id: 'road_motorway',
		// 	type: 'line',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'transportation',
		// 	minzoom: 5,
		// 	layout: {
		// 		'line-cap': 'round',
		// 		'line-join': 'round',
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'line-color': 'rgba(255, 255, 255, 1)',
		// 		'line-width': {
		// 			base: 1.2,
		// 			stops: [
		// 				[5, 0.5],
		// 				[7, 1],
		// 				[14, 5],
		// 				[18, 16],
		// 				[22, 18]
		// 			]
		// 		}
		// 	},
		// 	metadata: {},
		// 	filter: ['all', ['!in', 'brunnel', 'tunnel'], ['in', 'class', 'motorway']]
		// },
		{
			id: 'road_rail',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'transportation',
			layout: {
				visibility: 'visible'
			},
			paint: {
				'line-color': {
					stops: [
						[8, 'rgba(127, 127, 127, 1)'],
						[12, 'rgba(156, 156, 156, 1)'],
						[14, 'rgba(102, 102, 102, 1)'],
						[16, 'rgba(61, 61, 61, 1)']
					]
				},
				'line-width': {
					base: 1.4,
					stops: [
						[8, 0.4],
						[15, 0.75],
						[20, 3]
					]
				}
			},
			metadata: {},
			filter: ['all', ['!in', 'brunnel', 'tunnel'], ['==', 'class', 'rail']]
		},
		{
			id: 'limit_military',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'landuse',
			minzoom: 10,
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': {
					stops: [
						[10, 'rgba(167, 187, 128, 1)'],
						[16, 'rgba(113, 129, 82, 1)']
					]
				},
				'line-width': {
					stops: [
						[10, 1],
						[14, 1.6],
						[18, 3],
						[22, 4]
					]
				},
				'line-dasharray': [1, 2]
			},
			filter: ['all', ['==', 'class', 'military']]
		},
		// {
		// 	id: 'building',
		// 	type: 'fill',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'building',
		// 	minzoom: 12,
		// 	maxzoom: 24,
		// 	layout: {
		// 		visibility: 'visible'
		// 	},
		// 	paint: {
		// 		'fill-color': {
		// 			stops: [
		// 				[13, 'rgba(208, 208, 208, 1)'],
		// 				[18, 'rgba(125, 125, 125, 1)']
		// 			]
		// 		},
		// 		'fill-antialias': true,
		// 		'fill-outline-color': 'rgba(197, 197, 197, 1)'
		// 	},
		// 	filter: ['all']
		// },
		{
			id: 'trail_yellow_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(255, 249, 190, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 1.5],
						[14, 2.2],
						[18, 2.8]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					':yellow:::H6:white',
					':yellow:black_pointer',
					':yellow:blue_bar',
					':yellow:blue_pointer',
					':yellow:green_pointer',
					':yellow_round:',
					'GH',
					'white::yellow_bar',
					'white::yellow_x'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_yellow_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': {
					stops: [
						[13, 1],
						[14, 3]
					]
				}
			},
			paint: {
				'line-color': {
					stops: [
						[11, 'rgba(244, 244, 227, 1)'],
						[14, 'rgba(254, 249, 166, 1)']
					]
				},
				'line-width': {
					stops: [
						[11, 2],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[14, 3],
						[18, 4]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'yellow'],
				[
					'!in',
					'symbol',
					'yellow:white:yellow_corner',
					'yellow:white:yellow_circle',
					'yellow:white:yellow_backslash'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_yellow',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': {
					stops: [
						[13, 1],
						[14, 3]
					]
				}
			},
			paint: {
				'line-color': 'rgba(255, 249, 69, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, 1.5],
						[14, 2.6],
						[18, 3]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'yellow'],
				[
					'!in',
					'symbol',
					'yellow:white:yellow_corner',
					'yellow:white:yellow_circle',
					'yellow:white:yellow_backslash',
					':yellow:::H6:white',
					':yellow:black_pointer',
					':yellow:blue_bar',
					':yellow:blue_pointer',
					':yellow:green_pointer',
					':yellow_round:',
					'GH',
					'white::yellow_bar',
					'white::yellow_x'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_yellow_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(255, 249, 69, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[14, 0.5],
						[16, 1.7]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					':yellow:::H6:white',
					':yellow:black_pointer',
					':yellow:blue_bar',
					':yellow:blue_pointer',
					':yellow:green_pointer',
					':yellow_round:',
					'GH',
					'white::yellow_bar',
					'white::yellow_x'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_green_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, -1.5],
						[14, -2.2],
						[18, -2.8]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'green'],
				[
					'!in',
					'symbol',
					'green:white:green_corner',
					'green:white:green_circle',
					'green:white:green_backslash'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_green_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, -1.5],
						[14, -2.2],
						[18, -2.8]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['in', 'symbol', '#8EBE5F:#8EBE5F:#8EBE5F:R3:black', ':green:', ':green:::H7:white']
			]
		},
		{
			id: 'trail_green',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(86, 162, 33, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, -1.5],
						[14, -2.2],
						[18, -5]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'green'],
				[
					'!in',
					'symbol',
					'green:white:green_corner',
					'green:white:green_circle',
					'green:white:green_backslash'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_green_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(86, 162, 33, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, -1.5],
						[14, -2.2],
						[18, -2.8]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['in', 'symbol', '#8EBE5F:#8EBE5F:#8EBE5F:R3:black', ':green:', ':green:::H7:white']
			]
		},
		{
			id: 'trail_blue_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 2],
						[14, 4],
						[18, 5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'blue'],
				[
					'!in',
					'symbol',
					'blue:white:blue_corner',
					'blue:white:blue_circle',
					'blue:white:blue_backslash'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_blue_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 2],
						[14, 4],
						[18, 5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					'#40E0D0',
					':blue:::H4:white',
					'blu:blu:white_bar :F7:black',
					'blu:blu:white_bar :IT37:black',
					'blu:blue:yellow_bar:2:black',
					'darkblue:white:darkblue_stripe',
					'light_blu:light_blu::1:white',
					'light_blue:white:blue_triangle',
					'white::blue_bar',
					'white::blue_dot'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_blue_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(40, 108, 218, 1)',
				'line-width': {
					stops: [
						[14, 1],
						[18, 2.2]
					]
				},
				'line-offset': {
					stops: [
						[10, 2],
						[14, 4],
						[18, 5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					'#40E0D0',
					':blue:::H4:white',
					'blu:blu:white_bar :F7:black',
					'blu:blu:white_bar :IT37:black',
					'blu:blue:yellow_bar:2:black',
					'darkblue:white:darkblue_stripe',
					'light_blu:light_blu::1:white',
					'light_blue:white:blue_triangle',
					'white::blue_bar',
					'white::blue_dot'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_blue',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': {
					stops: [
						[11, 2],
						[14, 3]
					]
				},
				'line-round-limit': 1.05
			},
			paint: {
				'line-color': 'rgba(40, 108, 218, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, 2],
						[14, 4],
						[18, 5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'blue'],
				[
					'!in',
					'symbol',
					'blue:white:blue_corner',
					'blue:white:blue_circle',
					'blue:white:blue_backslash'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_brown_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, -2],
						[14, -4],
						[18, -5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'brown'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_brown_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': 4,
				'line-offset': {
					stops: [
						[10, -2],
						[14, -4],
						[18, -5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['in', 'symbol', ':brown::Klangweg:white', 'white::brown_hiker']]
		},
		{
			id: 'trail_brown',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(146, 99, 64, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, -2],
						[14, -4],
						[18, -5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'brown'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_brown_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(146, 99, 64, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, -2],
						[14, -4],
						[18, -5.6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['in', 'symbol', ':brown::Klangweg:white', 'white::brown_hiker']]
		},
		{
			id: 'trail_black_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, -2.3],
						[14, -4.3],
						[18, -6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					':::VO:white',
					':white:::H3:white',
					'aqua:aqua:white_bar:PLB:black',
					'black',
					'black::ammonit',
					'black::black_cross',
					'black::black_dot',
					'black::white_dot',
					'black:white: :1:black',
					'black:white: :2:black',
					'black:white: :3:black',
					'black:white: :4:black',
					'black:white: :5:black',
					'black:white: :6:black',
					'black:white:10:black',
					'black:white:37:black',
					'black:white:::H:black',
					'black:white:::STW:black',
					'black:white:::T:black',
					'black:white:::WDS:black',
					'black:white::DW:blue',
					'black:white::HZW',
					'black:white::ITH:black',
					'black:white::KKS:black',
					'black:white::Max:black',
					'black:white::RW:black',
					'black:white::SGH:black',
					'black:white::T:black',
					'black:white::VDzD:black',
					'black:white::Wi:black',
					'black:white:AW:black',
					'black:white:BgD:black',
					'black:white:GRS:black',
					'black:white:Glw:black',
					'black:white:LES:black',
					'black:white:W11:black',
					'black:white:ammonit',
					'black:white:black_cross',
					'black:white:black_dot',
					'black:white:black_dot::WHW:black',
					'black:white:black_frame:GT:black',
					'black:white:black_rectangle',
					'black:white:hiker',
					'black:white:nordic_walking',
					'black:white:tower',
					'black:white:white:1:black',
					'black:white:white:2:black',
					'black:white:white:3:black',
					'black:white_circle: :1:white',
					'black:white_circle: :2:white',
					'black:white_circle: :3:white',
					'black:white_round:blue_circle',
					'gray:black_circle:black_triangle',
					'gray:white',
					'white',
					'white::white_diamond',
					'white::white_dot',
					'white::white_pointer',
					'white:hiker',
					'white:tower:black',
					'white:white::8',
					'white:white::8:black',
					'white:white::C1:black',
					'white:white::D:red',
					'white:white::N:blue',
					'white:white::R1:red',
					'white:white:GWW:black',
					'white:white:L17:red',
					'white:white:L18:red',
					'white:white:L19:red',
					'white:white:W11:blue',
					'white:white:W12:blue',
					'white:white:black_dot',
					'white:white:black_pointer',
					'white:white:hiker',
					'white:white:hiker:black',
					'white:white:hiker:black::',
					'white:white_round::W:black'
				]
			]
		},
		{
			id: 'trail_black_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, -2.3],
						[14, -4.3],
						[18, -6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'black'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_black',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(47, 47, 47, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, -2.3],
						[14, -4.3],
						[18, -6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'black'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_black_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(47, 47, 47, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, -2.3],
						[14, -4.3],
						[18, -6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					':::VO:white',
					':white:::H3:white',
					'aqua:aqua:white_bar:PLB:black',
					'black',
					'black::ammonit',
					'black::black_cross',
					'black::black_dot',
					'black::white_dot',
					'black:white: :1:black',
					'black:white: :2:black',
					'black:white: :3:black',
					'black:white: :4:black',
					'black:white: :5:black',
					'black:white: :6:black',
					'black:white:10:black',
					'black:white:37:black',
					'black:white:::H:black',
					'black:white:::STW:black',
					'black:white:::T:black',
					'black:white:::WDS:black',
					'black:white::DW:blue',
					'black:white::HZW',
					'black:white::ITH:black',
					'black:white::KKS:black',
					'black:white::Max:black',
					'black:white::RW:black',
					'black:white::SGH:black',
					'black:white::T:black',
					'black:white::VDzD:black',
					'black:white::Wi:black',
					'black:white:AW:black',
					'black:white:BgD:black',
					'black:white:GRS:black',
					'black:white:Glw:black',
					'black:white:LES:black',
					'black:white:W11:black',
					'black:white:ammonit',
					'black:white:black_cross',
					'black:white:black_dot',
					'black:white:black_dot::WHW:black',
					'black:white:black_frame:GT:black',
					'black:white:black_rectangle',
					'black:white:hiker',
					'black:white:nordic_walking',
					'black:white:tower',
					'black:white:white:1:black',
					'black:white:white:2:black',
					'black:white:white:3:black',
					'black:white_circle: :1:white',
					'black:white_circle: :2:white',
					'black:white_circle: :3:white',
					'black:white_round:blue_circle',
					'gray:black_circle:black_triangle',
					'gray:white',
					'white',
					'white::white_diamond',
					'white::white_dot',
					'white::white_pointer',
					'white:hiker',
					'white:tower:black',
					'white:white::8',
					'white:white::8:black',
					'white:white::C1:black',
					'white:white::D:red',
					'white:white::N:blue',
					'white:white::R1:red',
					'white:white:GWW:black',
					'white:white:L17:red',
					'white:white:L18:red',
					'white:white:L19:red',
					'white:white:W11:blue',
					'white:white:W12:blue',
					'white:white:black_dot',
					'white:white:black_pointer',
					'white:white:hiker',
					'white:white:hiker:black',
					'white:white:hiker:black::',
					'white:white_round::W:black'
				]
			]
		},
		{
			id: 'trail_purple_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 2.3],
						[14, 4.3],
						[18, 6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'purple'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_purple_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 2.3],
						[14, 4.3],
						[18, 6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['in', 'symbol', '#E8ADAA', ':purple:::H2:white']]
		},
		{
			id: 'trail_purple',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': {
					stops: [
						[11, 8],
						[14, 3]
					]
				}
			},
			paint: {
				'line-color': 'rgba(176, 83, 220, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, 2.3],
						[14, 4.3],
						[18, 6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'purple'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_purple_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(176, 83, 220, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, 2.3],
						[14, 4.3],
						[18, 6]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['in', 'symbol', '#E8ADAA', ':purple:::H2:white']]
		},
		{
			id: 'trail_orange_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 3],
						[14, 5],
						[18, 7]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'orange'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_orange_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[10, 3],
						[14, 5],
						[18, 7]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'orange'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_orange',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': {
					stops: [
						[11, 8],
						[12, 12],
						[13, 16],
						[14, 3]
					]
				}
			},
			paint: {
				'line-color': 'rgba(224, 155, 61, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': {
					stops: [
						[10, 3],
						[14, 5],
						[18, 7]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'color', 'orange'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_orange_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(224, 155, 61, 1)',
				'line-width': 2,
				'line-offset': {
					stops: [
						[10, 3],
						[14, 5],
						[18, 7]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					':orange:::H5:white',
					':orange:blue_lower:::',
					':white:orange_bar:blue_dot::',
					'white::orange_fork'
				]
			]
		},
		{
			id: 'trail_red_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					stops: [
						[11, 3],
						[14, 4]
					]
				}
			},
			filter: ['all', ['==', 'color', 'red'], ['!in', 'class', 'ski', 'horse']]
		},
		{
			id: 'trail_red_casing_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(253, 252, 252, 1)',
				'line-width': {
					base: 1,
					stops: [
						[11, 3],
						[14, 4]
					]
				},
				'line-offset': 0,
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					'red:red:white_bar:431:black',
					'red:red:white_bar:458:black',
					':red:::H1:white',
					'Giswil - Stalden',
					'RWW',
					'Raute mit silbernem Kreuz auf blauem Grund',
					'Tauplitz Wanderweg 209',
					'Tschierweg-Alexanderhütte-Millstätter Hütte-Millstätter Törl- Nöhringsattel-Thomanbauerhütte-Langnock'
				]
			]
		},
		{
			id: 'trail_red_extra',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(205, 35, 2, 1)',
				'line-width': {
					base: 1,
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': 0,
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				[
					'in',
					'symbol',
					'ed:red:white_bar:431:black',
					'red:red:white_bar:458:black',
					':red:::H1:white',
					'Giswil - Stalden',
					'RWW',
					'Raute mit silbernem Kreuz auf blauem Grund',
					'Tauplitz Wanderweg 209',
					'Tschierweg-Alexanderhütte-Millstätter Hütte-Millstätter Törl- Nöhringsattel-Thomanbauerhütte-Langnock'
				]
			]
		},
		{
			id: 'trail_red',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 11,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': {
					stops: [
						[13, 1],
						[14, 3]
					]
				}
			},
			paint: {
				'line-color': 'rgba(205, 35, 2, 1)',
				'line-width': {
					stops: [
						[11, 1],
						[14, 2]
					]
				},
				'line-offset': 0,
				'line-opacity': 1
			},
			metadata: {},
			filter: [
				'all',
				['==', 'color', 'red'],
				[
					'!in',
					'symbol',
					'red:white:red_corner',
					'red:white:red_circle',
					'red:white:red_backslash'
				],
				['!in', 'class', 'ski', 'horse']
			]
		},
		{
			id: 'trail_longdistance_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 6,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-blur': {
					stops: [
						[6, 0.6],
						[10, 0.4]
					]
				},
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-width': {
					stops: [
						[6, 1],
						[11, 1.4],
						[15, 4],
						[18, 6]
					]
				},
				'line-offset': 0
			},
			filter: ['all', ['in', 'network', 'iwn', 'nwn'], ['has', 'ref']]
		},
		{
			id: 'trail_longdistance',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 6,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-blur': {
					stops: [
						[6, 0.6],
						[10, 0.4],
						[14, 0]
					]
				},
				'line-color': {
					stops: [
						[6, 'rgba(255, 51, 10, 1)'],
						[14, 'rgba(205, 35, 2, 1)']
					]
				},
				'line-width': {
					stops: [
						[6, 0.8],
						[11, 1],
						[15, 2],
						[18, 3]
					]
				},
				'line-offset': 0
			},
			filter: ['all', ['in', 'network', 'iwn', 'nwn'], ['has', 'ref']]
		},
		{
			id: 'viaferrata_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 14,
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(205, 35, 2, 1)',
				'line-width': {
					base: 1,
					stops: [
						[14, 0.8],
						[18, 1.6]
					]
				},
				'line-offset': 0,
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'via_ferrata']]
		},
		{
			id: 'viaferrata',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 14,
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-width': {
					base: 1,
					stops: [
						[14, 1.2],
						[18, 3.2]
					]
				},
				'line-offset': 0,
				'line-opacity': 1,
				'line-dasharray': [0.5, 2]
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'via_ferrata']]
		},
		{
			id: 'viaferrata_symbol',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 17,
			layout: {
				'text-font': ['Open Sans Bold', 'Noto Sans Bold'],
				'text-size': 16,
				'text-field': '.',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'symbol-spacing': 20,
				'symbol-placement': 'line'
			},
			paint: {
				'text-color': 'rgba(205, 35, 2, 1)',
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', 'class', 'via_ferrata']]
		},
		{
			id: 'bicycle_local_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-color': 'rgba(246, 227, 255, 1)',
				'line-width': {
					base: 1,
					stops: [
						[12, 2.6],
						[14, 4]
					]
				},
				'line-offset': {
					stops: [
						[13, 0],
						[14, -5]
					]
				},
				'line-opacity': 1
			},
			filter: ['all', ['==', 'class', 'bicycle'], ['in', 'network', 'rcn', 'lcn']]
		},
		{
			id: 'bicycle_local',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 13,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-blur': 0,
				'line-color': 'rgba(230, 31, 210, 1)',
				'line-width': {
					base: 1,
					stops: [
						[12, 0.4],
						[14, 1.7]
					]
				},
				'line-offset': {
					stops: [
						[13, 0],
						[14, -5]
					]
				},
				'line-opacity': 1,
				'line-dasharray': [2, 2]
			},
			filter: ['all', ['==', 'class', 'bicycle'], ['in', 'network', 'rcn', 'lcn']]
		},
		{
			id: 'bicycle_longdistance_casing',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 6,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-blur': {
					stops: [
						[6, 0.4],
						[10, 0.2]
					]
				},
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-width': {
					stops: [
						[6, 1],
						[11, 2],
						[15, 4],
						[18, 6]
					]
				},
				'line-offset': 0
			},
			filter: ['all', ['in', 'network', 'icn', 'ncn'], ['has', 'ref']]
		},
		{
			id: 'bicycle_longdistance',
			type: 'line',
			source: 'outdoor',
			'source-layer': 'trail',
			minzoom: 6,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				'line-join': 'miter',
				visibility: 'visible',
				'line-miter-limit': 3
			},
			paint: {
				'line-blur': {
					stops: [
						[6, 0.4],
						[10, 0.2]
					]
				},
				'line-color': 'rgba(255, 65, 234, 1)',
				'line-width': {
					stops: [
						[6, 1],
						[11, 1.4],
						[15, 2],
						[18, 3]
					]
				},
				'line-dasharray': [2, 2]
			},
			filter: ['all', ['in', 'network', 'icn', 'ncn'], ['has', 'ref']]
		},
		{
			id: 'cablecar',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(92, 92, 92, 1)',
				'line-width': {
					base: 1,
					stops: [
						[12, 3],
						[22, 4.5]
					]
				}
			},
			filter: ['==', 'class', 'aerialway']
		},
		{
			id: 'cablecar-dash',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			layout: {
				'line-cap': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(244, 244, 244, 1)',
				'line-width': {
					base: 1,
					stops: [
						[11, 1.5],
						[19, 3]
					]
				},
				'line-dasharray': [2.5, 4]
			},
			filter: ['==', 'class', 'aerialway']
		},
		// {
		// 	id: 'outdoor_poi_parking',
		// 	type: 'symbol',
		// 	source: 'maptiler_planet',
		// 	'source-layer': 'poi',
		// 	minzoom: 15,
		// 	layout: {
		// 		'icon-size': {
		// 			stops: [
		// 				[13, 0.7],
		// 				[18, 1]
		// 			]
		// 		},
		// 		'text-font': ['Open Sans Regular', 'Noto Sans Regular'],
		// 		'icon-image': 'parking',
		// 		'text-optional': true
		// 	},
		// 	filter: ['all', ['==', 'class', 'parking']]
		// },
		{
			id: 'outdoor_poi_fireplace',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 16,
			layout: {
				'icon-size': 1,
				'icon-image': 'fire',
				visibility: 'visible',
				'icon-anchor': 'bottom'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'fireplace']]
		},
		{
			id: 'outdoor_poi_bench',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 16,
			layout: {
				'icon-size': {
					stops: [
						[16, 0.7],
						[20, 1]
					]
				},
				'icon-image': 'bench',
				visibility: 'visible',
				'icon-anchor': 'bottom'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'bench']]
		},
		{
			id: 'outdoor_poi_drinking_water',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 16,
			layout: {
				'icon-size': 1,
				'icon-image': 'drinking-water',
				visibility: 'visible'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'drinking_water']]
		},
		{
			id: 'outdoor_poi_guidepost',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 14,
			layout: {
				'icon-size': 1,
				'icon-image': 'guidepost',
				visibility: 'visible',
				'icon-anchor': 'bottom'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'guidepost']]
		},
		{
			id: 'outdoor_poi_spring',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 16,
			layout: {
				'icon-size': 1,
				'icon-image': 'spring',
				visibility: 'visible'
			},
			filter: ['all', ['==', '$type', 'Point'], ['in', 'class', 'spring']]
		},
		{
			id: 'outdoor_poi_waterfall',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 12,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'waterfall',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, 0],
				'text-anchor': 'top',
				'icon-padding': 2,
				'symbol-z-order': 'auto',
				'text-max-width': 8,
				'text-allow-overlap': true,
				'icon-ignore-placement': true,
				'text-ignore-placement': false
			},
			paint: {
				'text-color': 'rgba(53, 134, 199, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'waterfall']]
		},
		{
			id: 'outdoor_poi_viewpoint',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 13,
			layout: {
				'icon-size': 1.2,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[10, 14],
						[12, 18],
						[14, 20],
						[16, 22]
					]
				},
				'icon-image': 'viewpoint',
				'text-field': '',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'viewpoint']]
		},
		{
			id: 'outdoor_poi_picnic_site',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 14,
			layout: {
				'icon-size': 1,
				'icon-image': 'picnic',
				visibility: 'visible'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'picnic_site']]
		},
		{
			id: 'outdoor_poi_map',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 14,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'icon-image': 'board-map',
				visibility: 'visible',
				'icon-anchor': 'bottom'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'map']]
		},
		{
			id: 'outdoor_poi_board',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 15,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'icon-image': 'board-text',
				visibility: 'visible',
				'icon-anchor': 'bottom'
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'board']]
		},
		{
			id: 'outdoor_poi_tourist_info',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 13,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'information',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'info_office']]
		},
		{
			id: 'outdoor_poi_camp_site',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'poi',
			minzoom: 12,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'camp-site',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'class', 'campsite'],
				['==', 'subclass', 'camp_site']
			]
		},
		{
			id: 'outdoor_poi_memorial_monument',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 15,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'memorial-monument',
				'text-field': '',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['in', 'class', 'memorial', 'monument']]
		},
		{
			id: 'outdoor_poi_shelter',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 13,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'shelter',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'Point'], ['in', 'class', 'shelter']]
		},
		{
			id: 'outdoor_poi_hut',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 14,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'hut',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'hut']]
		},
		{
			id: 'outdoor_poi_cave',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 13,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'cave-entrance',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'icon-color': 'rgba(38, 33, 24, 1)',
				'text-color': 'rgba(38, 33, 24, 1)',
				'icon-halo-blur': 0.2,
				'text-halo-blur': 0.2,
				'icon-halo-color': 'rgba(255, 255, 255, 1)',
				'icon-halo-width': 1,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'cave_entrance']]
		},
		{
			id: 'outdoor_poi_ruins',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 14,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'ruins',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'ruins']]
		},
		{
			id: 'outdoor_poi_fortress',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 13,
			layout: {
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'fortress',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'fortress']]
		},
		{
			id: 'outdoor_poi_castle',
			type: 'symbol',
			source: 'outdoor',
			'source-layer': 'outdoor_poi',
			minzoom: 13,
			layout: {
				'icon-size': {
					stops: [
						[12, 0.85],
						[16, 1.2]
					]
				},
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'castle',
				'text-field': '{name}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'castle']]
		},
		{
			id: 'outdoor_poi_church',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'poi',
			minzoom: 14,
			layout: {
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': 12,
				'icon-image': 'church',
				'text-field': '{name}',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -3],
				'text-anchor': 'top'
			},
			paint: {
				'text-color': 'rgba(38, 33, 24, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', 'class', 'place_of_worship'], ['==', 'subclass', 'christian']]
		},
		{
			id: 'transport_bus',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'poi',
			minzoom: 15,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'icon-image': 'bus-stop',
				'text-field': ' ',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -8],
				'icon-padding': 0
			},
			paint: {
				'text-color': 'rgba(46, 21, 1, 1)',
				'text-halo-blur': 0,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'bus'], ['==', 'subclass', 'bus_stop']]
		},
		{
			id: 'transport_railway',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'poi',
			minzoom: 12,
			layout: {
				'icon-size': 1,
				'text-font': ['Roboto Medium', 'Noto Sans Regular'],
				'text-size': {
					stops: [
						[6, 11],
						[14, 13],
						[16, 15]
					]
				},
				'icon-image': 'square',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, -8],
				'icon-padding': 0,
				'text-line-height': 0.9
			},
			paint: {
				'text-color': 'rgba(46, 21, 1, 1)',
				'text-halo-blur': 0,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'railway'], ['==', 'subclass', 'station']]
		},
		{
			id: 'transport_airport',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'aerodrome_label',
			minzoom: 8,
			layout: {
				'icon-size': {
					stops: [
						[10, 0.6],
						[16, 1.8]
					]
				},
				'text-font': ['Roboto Medium', 'Noto Sans Regular'],
				'text-size': {
					stops: [
						[10, 9],
						[12, 11],
						[14, 14]
					]
				},
				'icon-image': 'airport',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': {
					stops: [
						[10, [0, -7]],
						[12, [0, -10]]
					]
				},
				'text-line-height': 0.9
			},
			paint: {
				'text-color': 'rgba(65, 58, 58, 1)',
				'text-halo-blur': 0.5,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['in', 'class', 'international', 'regional']]
		},
		{
			id: 'transport_airfield',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'aerodrome_label',
			minzoom: 11,
			layout: {
				'icon-size': {
					stops: [
						[10, 0.6],
						[16, 1.8]
					]
				},
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'text-size': 13,
				'icon-image': 'airfield',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': {
					stops: [
						[10, [0, -4]],
						[14, [0, -7]]
					]
				},
				'text-anchor': 'top',
				'text-line-height': 0.9
			},
			paint: {
				'text-color': 'rgba(65, 58, 58, 1)',
				'text-halo-blur': 0.5,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'other']]
		},
		{
			id: 'road_label_track',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'transportation_name',
			layout: {
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'text-size': {
					base: 1,
					stops: [
						[13, 12],
						[14, 13]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-anchor': 'center',
				'text-offset': [0, 0.15],
				'symbol-placement': 'line'
			},
			paint: {
				'text-color': 'rgba(59, 57, 54, 1)',
				'text-halo-blur': 0.5,
				'text-halo-color': 'rgba(255, 255, 255, 0.93)',
				'text-halo-width': 1.3
			},
			metadata: {},
			filter: ['all', ['in', 'class', 'track']]
		},
		{
			id: 'road_label_ferry',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'transportation_name',
			layout: {
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'text-size': {
					base: 1,
					stops: [
						[13, 10],
						[16, 13]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-anchor': 'center',
				'text-offset': [0, 0.8],
				'symbol-spacing': 450,
				'symbol-placement': 'line'
			},
			paint: {
				'text-color': 'rgba(111, 154, 191, 1)',
				'text-halo-blur': 0.5,
				'text-halo-width': 0
			},
			metadata: {},
			filter: ['all', ['==', 'subclass', 'ferry']]
		},
		{
			id: 'road_label',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'transportation_name',
			layout: {
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'text-size': {
					base: 1,
					stops: [
						[13, 10],
						[14, 11],
						[16, 13]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-anchor': 'center',
				'text-offset': [0, 0.15],
				'symbol-placement': 'line'
			},
			paint: {
				'text-color': 'rgba(34, 34, 34, 1)',
				'text-halo-blur': 0.5,
				'text-halo-color': 'rgba(255, 255, 255, 1)',
				'text-halo-width': 1.5
			},
			metadata: {},
			filter: [
				'all',
				['!=', 'class', 'track'],
				['!=', 'subclass', 'ferry'],
				['!=', 'class', 'bus_guideway']
			]
		},
		{
			id: 'boundary_state',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'boundary',
			minzoom: 3,
			layout: {
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(164, 162, 172, 1)',
				'line-width': {
					base: 1,
					stops: [
						[4, 0.3],
						[5, 0.6],
						[12, 1.8]
					]
				},
				'line-dasharray': [5, 1]
			},
			metadata: {},
			filter: ['all', ['in', 'admin_level', 3, 4], ['==', 'maritime', 0]]
		},
		{
			id: 'boundary_maritime',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'boundary',
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': {
					stops: [
						[4, 'rgba(131, 192, 252, 1)'],
						[10, 'rgba(100, 157, 217, 1)']
					]
				},
				'line-width': {
					base: 1,
					stops: [
						[5, 1.2],
						[14, 1.8]
					]
				},
				'line-opacity': 1
			},
			metadata: {},
			filter: ['all', ['==', 'admin_level', 2], ['==', 'maritime', 1]]
		},
		{
			id: 'boundary_country-disputed',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'boundary',
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': 'rgba(103, 110, 99, 1)',
				'line-width': {
					base: 1,
					stops: [
						[0, 0.4],
						[3, 0.9],
						[5, 1.3],
						[12, 3]
					]
				},
				'line-opacity': {
					base: 1,
					stops: [
						[0, 0.3],
						[4, 0.6],
						[12, 1]
					]
				},
				'line-dasharray': [2, 2]
			},
			metadata: {},
			filter: ['all', ['==', 'admin_level', 2], ['==', 'maritime', 0], ['==', 'disputed', 1]]
		},
		{
			id: 'boundary_country',
			type: 'line',
			source: 'maptiler_planet',
			'source-layer': 'boundary',
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-color': {
					stops: [
						[6, 'rgba(103, 110, 99, 1)'],
						[16, 'rgba(125, 131, 125, 1)']
					]
				},
				'line-width': {
					base: 1,
					stops: [
						[0, 0.4],
						[3, 0.9],
						[5, 1.3],
						[12, 3]
					]
				},
				'line-opacity': {
					base: 1,
					stops: [
						[0, 0.3],
						[4, 0.6],
						[16, 1]
					]
				}
			},
			metadata: {},
			filter: ['all', ['==', 'admin_level', 2], ['==', 'maritime', 0], ['==', 'disputed', 0]]
		},
		{
			id: 'mountain_peak-us',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'mountain_peak',
			minzoom: 9,
			maxzoom: 24,
			layout: {
				'icon-size': {
					stops: [
						[9, 0.7],
						[14, 1]
					]
				},
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[7, 9],
						[11, 10],
						[13, 14]
					]
				},
				'icon-image': 'peak',
				'text-field': '{name:latin} {ele_ft} ft',
				visibility: 'visible',
				'icon-anchor': 'center',
				'text-anchor': 'top',
				'text-offset': [0, 0.5],
				'text-max-width': {
					stops: [
						[12, 3],
						[15, 3]
					]
				}
			},
			paint: {
				'text-color': {
					stops: [
						[11, 'rgba(69, 69, 69, 1)'],
						[15, 'rgba(46, 46, 46, 1)']
					]
				},
				'text-halo-blur': {
					stops: [
						[11, 2],
						[15, 0]
					]
				},
				'text-halo-color': {
					stops: [
						[11, 'rgba(255, 255, 255, 1)'],
						[15, 'rgba(255, 255, 255, 0.56)']
					]
				},
				'text-halo-width': {
					stops: [
						[11, 2],
						[15, 1.3]
					]
				}
			},
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'rank', 1],
				['==', 'class', 'peak'],
				['has', 'customary_ft']
			]
		},
		{
			id: 'mountain_peak',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'mountain_peak',
			minzoom: 9,
			maxzoom: 24,
			layout: {
				'icon-size': {
					stops: [
						[9, 0.7],
						[14, 1]
					]
				},
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[7, 9],
						[11, 10],
						[13, 14]
					]
				},
				'icon-image': 'peak',
				'text-field': '{name:latin} {ele} m',
				visibility: 'visible',
				'icon-anchor': 'center',
				'text-anchor': 'top',
				'text-offset': [0, 0.5],
				'text-max-width': {
					stops: [
						[12, 3],
						[15, 3]
					]
				}
			},
			paint: {
				'text-color': {
					stops: [
						[11, 'rgba(69, 69, 69, 1)'],
						[15, 'rgba(46, 46, 46, 1)']
					]
				},
				'text-halo-blur': {
					stops: [
						[11, 2],
						[15, 0]
					]
				},
				'text-halo-color': {
					stops: [
						[11, 'rgba(255, 255, 255, 1)'],
						[15, 'rgba(255, 255, 255, 0.56)']
					]
				},
				'text-halo-width': {
					stops: [
						[11, 2],
						[15, 1.3]
					]
				}
			},
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'rank', 1],
				['==', 'class', 'peak'],
				['!has', 'customary_ft']
			]
		},
		{
			id: 'mountain_volcano-us',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'mountain_peak',
			minzoom: 9,
			maxzoom: 24,
			layout: {
				'icon-size': {
					stops: [
						[9, 0.7],
						[14, 1]
					]
				},
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[7, 9],
						[11, 10],
						[13, 14]
					]
				},
				'icon-image': 'volcano',
				'text-field': '{name:latin} {ele_ft} ft',
				visibility: 'visible',
				'text-anchor': 'top',
				'text-offset': [0, 0.5],
				'text-max-width': {
					stops: [
						[12, 3],
						[15, 3]
					]
				}
			},
			paint: {
				'text-color': 'rgba(205, 111, 0, 1)',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,1)',
				'text-halo-width': 1
			},
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'rank', 1],
				['==', 'class', 'volcano'],
				['has', 'customary_ft']
			]
		},
		{
			id: 'mountain_volcano',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'mountain_peak',
			minzoom: 9,
			maxzoom: 24,
			layout: {
				'icon-size': {
					stops: [
						[9, 0.7],
						[14, 1]
					]
				},
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[7, 9],
						[11, 10],
						[13, 14]
					]
				},
				'icon-image': 'volcano',
				'text-field': '{name:latin} {ele} m',
				visibility: 'visible',
				'text-anchor': 'top',
				'text-offset': [0, 0.5],
				'text-max-width': {
					stops: [
						[12, 3],
						[15, 3]
					]
				}
			},
			paint: {
				'text-color': 'rgba(205, 111, 0, 1)',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,1)',
				'text-halo-width': 1
			},
			filter: [
				'all',
				['==', '$type', 'Point'],
				['==', 'rank', 1],
				['==', 'class', 'volcano'],
				['!has', 'customary_ft']
			]
		},
		{
			id: 'water_name_line',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'water_name',
			minzoom: 0,
			layout: {
				'text-font': ['Roboto Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[10, 12],
						[14, 16]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-max-width': 5,
				'symbol-placement': 'line',
				'text-letter-spacing': 0.6
			},
			paint: {
				'text-color': 'rgba(17, 104, 217, 1)',
				'text-halo-color': 'rgba(255, 255, 255, 0.45)',
				'text-halo-width': 1.5
			},
			metadata: {},
			filter: ['all', ['==', '$type', 'LineString']]
		},
		{
			id: 'water_name_point',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'water_name',
			minzoom: 2,
			layout: {
				'text-font': ['Roboto Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[2, 14],
						[3, 16],
						[6, 20]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-anchor': 'center',
				'text-optional': true,
				'text-max-width': 8,
				'text-transform': 'none'
			},
			paint: {
				'text-color': {
					stops: [
						[6, 'rgba(109, 147, 203, 1)'],
						[10, 'rgba(17, 104, 217, 1)']
					]
				},
				'text-halo-blur': 1.6,
				'text-halo-color': 'rgba(179, 222, 255, 0)',
				'text-halo-width': 1.4
			},
			metadata: {},
			filter: ['all', ['==', '$type', 'Point'], ['!=', 'class', 'lake']]
		},
		{
			id: 'water_name_way',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'waterway',
			minzoom: 14,
			layout: {
				'text-font': ['Roboto Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[6, 11],
						[16, 14]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-offset': [0, -0.8],
				'symbol-spacing': 350,
				'text-max-width': 5,
				'symbol-placement': 'line',
				'text-letter-spacing': 0.6,
				'text-rotation-alignment': 'map'
			},
			paint: {
				'text-color': 'rgba(17, 104, 217, 1)',
				'text-halo-blur': 0.2,
				'text-halo-color': 'rgba(242, 241, 241, 0.85)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', '$type', 'LineString'], ['has', 'name']]
		},
		{
			id: 'place_village',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 10,
			maxzoom: 16,
			layout: {
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'text-size': {
					base: 1.2,
					stops: [
						[10, 12],
						[15, 22]
					]
				},
				'icon-image': 'dot_9',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-anchor': 'bottom',
				'icon-offset': [0, 6],
				'text-anchor': 'bottom',
				'text-max-width': 8
			},
			paint: {
				'text-color': 'rgba(30, 30, 34, 1)',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.9
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'village']]
		},
		{
			id: 'place_other',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			layout: {
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					base: 1.2,
					stops: [
						[11, 11],
						[16, 16]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-max-width': 9,
				'text-transform': 'none',
				'text-letter-spacing': 0.1
			},
			paint: {
				'text-color': {
					stops: [
						[10, 'rgba(51, 51, 57, 1)'],
						[14, 'rgba(28, 28, 30, 1)']
					]
				},
				'text-halo-blur': 0.1,
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			},
			metadata: {},
			filter: ['all', ['in', 'class', 'hamlet', 'island', 'islet', 'neighbourhood', 'suburb']]
		},
		{
			id: 'place_town',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 6,
			maxzoom: 16,
			layout: {
				'icon-size': 0.85,
				'text-font': ['Roboto Regular', 'Noto Sans Regular'],
				'text-size': {
					base: 1.2,
					stops: [
						[7, 11],
						[11, 20]
					]
				},
				'icon-image': 'dot_11',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-anchor': 'top',
				'icon-offset': [0, 8],
				'text-anchor': 'center',
				'text-offset': [0, 0],
				'text-max-width': 9
			},
			paint: {
				'text-color': 'rgba(30, 30, 34, 1)',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.6
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'town']]
		},
		{
			id: 'place_park',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'park',
			minzoom: 10,
			maxzoom: 24,
			layout: {
				'text-font': ['Roboto Condensed Italic', 'Noto Sans Italic'],
				'text-size': {
					stops: [
						[13, 13],
						[16, 14]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-padding': {
					stops: [
						[6, 39],
						[14, 99]
					]
				},
				'symbol-spacing': 750
			},
			paint: {
				'text-color': 'rgba(24, 107, 32, 1)',
				'text-halo-blur': {
					stops: [
						[9, 3],
						[14, 0.5]
					]
				},
				'text-halo-color': {
					stops: [
						[9, 'rgba(239, 249, 239, 0.89)'],
						[14, 'rgba(233, 253, 233, 0.75)']
					]
				},
				'text-halo-width': {
					stops: [
						[9, 1.6],
						[14, 1]
					]
				}
			},
			filter: ['all']
		},
		{
			id: 'place_city',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 5,
			maxzoom: 24,
			layout: {
				'icon-size': 1.4,
				'text-font': ['Roboto Medium', 'Noto Sans Regular'],
				'text-size': {
					base: 1.2,
					stops: [
						[7, 14],
						[11, 24]
					]
				},
				'icon-image': 'dot_9',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-anchor': 'bottom',
				'text-offset': [0, 0],
				'icon-optional': false,
				'text-max-width': 8,
				'icon-allow-overlap': false
			},
			paint: {
				'text-color': {
					stops: [
						[6, 'rgba(62, 62, 63, 1)'],
						[11, 'rgba(30, 30, 34, 1)']
					]
				},
				'text-halo-color': 'rgba(255, 255, 255, 0.82)',
				'text-halo-width': 1.6
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'city'], ['<=', 'rank', 8], ['!=', 'capital', 2]]
		},
		{
			id: 'place_capital',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 5,
			maxzoom: 15,
			layout: {
				'icon-size': {
					stops: [
						[6, 1.2],
						[10, 1.4]
					]
				},
				'text-font': ['Roboto Medium', 'Noto Sans Regular'],
				'text-size': {
					base: 1.2,
					stops: [
						[5, 16],
						[7, 18],
						[9, 25],
						[11, 28]
					]
				},
				'icon-image': 'dot_11',
				'text-field': '{name:latin}',
				visibility: 'visible',
				'icon-offset': {
					stops: [
						[6, [0, 0]],
						[10, [0, -2]]
					]
				},
				'text-anchor': 'bottom',
				'text-offset': [0, 0],
				'icon-optional': false,
				'text-max-width': 8,
				'icon-allow-overlap': false
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			},
			metadata: {},
			filter: ['all', ['==', 'capital', 2], ['==', 'class', 'city']]
		},
		{
			id: 'place_region',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 8,
			maxzoom: 9,
			layout: {
				'text-font': ['Roboto Medium', 'Noto Sans Regular'],
				'text-size': {
					stops: [
						[3, 9],
						[7, 12]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-padding': 2,
				'text-transform': 'uppercase',
				'text-letter-spacing': 0.1
			},
			paint: {
				'text-color': 'rgba(118, 116, 108, 1)',
				'text-halo-color': 'rgba(255,255,255,0.7)',
				'text-halo-width': 0.8
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'state'], ['in', 'rank', 3, 4, 5]]
		},
		{
			id: 'place_state',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 3,
			maxzoom: 8,
			layout: {
				'text-font': ['Roboto Medium', 'Noto Sans Regular'],
				'text-size': {
					stops: [
						[3, 10],
						[6, 14]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': 'rgba(124, 124, 129, 1)',
				'text-halo-color': 'rgba(255,255,255,0.7)',
				'text-halo-width': 1
			},
			filter: ['all', ['==', 'class', 'state'], ['in', 'rank', 0, 1, 2]]
		},
		{
			id: 'country_other',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			layout: {
				'text-font': ['Noto Sans Bold'],
				'text-size': {
					stops: [
						[3, 9],
						[5, 11],
						[7, 16]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-max-width': 6.25,
				'text-transform': 'none'
			},
			paint: {
				'text-color': {
					stops: [
						[2, 'rgba(108, 101, 101, 1)'],
						[10, 'rgba(65, 61, 61, 1)']
					]
				},
				'text-halo-blur': 1.6,
				'text-halo-color': 'rgba(248, 248, 242, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'country'], ['!has', 'iso_a2']]
		},
		{
			id: 'country_rank_3',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 3,
			maxzoom: 8,
			layout: {
				'text-font': ['Noto Sans Bold'],
				'text-size': {
					stops: [
						[3, 10],
						[4, 14],
						[7, 18]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-max-width': 6.25,
				'text-transform': 'none'
			},
			paint: {
				'text-color': {
					stops: [
						[2, 'rgba(108, 101, 101, 1)'],
						[10, 'rgba(65, 61, 61, 1)']
					]
				},
				'text-halo-blur': 1.6,
				'text-halo-color': 'rgba(248, 248, 242, 1)',
				'text-halo-width': 1
			},
			metadata: {},
			filter: ['all', ['>=', 'rank', 3], ['==', 'class', 'country'], ['has', 'iso_a2']]
		},
		{
			id: 'country_rank_1-2',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			minzoom: 2,
			maxzoom: 7,
			layout: {
				'text-font': ['Noto Sans Bold'],
				'text-size': {
					stops: [
						[2, 10],
						[4, 14],
						[7, 22]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-padding': 0,
				'text-max-width': 8.25,
				'text-transform': 'none',
				'text-line-height': 0.9
			},
			paint: {
				'text-color': {
					stops: [
						[2, 'rgba(108, 101, 101, 1)'],
						[10, 'rgba(65, 61, 61, 1)']
					]
				},
				'text-halo-blur': 2,
				'text-halo-color': 'rgba(248, 248, 242, 1)',
				'text-halo-width': 1.4
			},
			metadata: {},
			filter: ['all', ['<=', 'rank', 2], ['==', 'class', 'country'], ['has', 'iso_a2']]
		},
		{
			id: 'continent',
			type: 'symbol',
			source: 'maptiler_planet',
			'source-layer': 'place',
			maxzoom: 3,
			layout: {
				'text-font': ['Nunito Bold', 'Noto Sans Bold'],
				'text-size': {
					stops: [
						[1, 12],
						[4, 24]
					]
				},
				'text-field': '{name:latin}',
				visibility: 'visible',
				'text-justify': 'center',
				'text-padding': 0,
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': 'rgba(58, 59, 67, 1)',
				'text-halo-color': 'rgba(241, 242, 233, 1)',
				'text-halo-width': 1.3
			},
			metadata: {},
			filter: ['all', ['==', 'class', 'continent']]
		}
	],
	metadata: {
		'maptiler:copyright':
			'This style was generated on MapTiler Cloud. Usage outside of MapTiler Cloud requires valid MapTiler Data Package: https://www.maptiler.com/data/package/ -- please contact us.'
	},
	glyphs: `https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=${MAPTILER_KEY}`,
	sprite: 'https://api.maptiler.com/maps/outdoor/sprite',
	bearing: 0,
	pitch: 0,
	center: [0, 0],
	zoom: 1
};

export default style;
