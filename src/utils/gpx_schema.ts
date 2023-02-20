import * as Primitive from './xml-primitives';

// Source files:
// https://www.topografix.com/GPX/1/1/gpx.xsd

interface BaseType {
	_exists: boolean;
	_namespace: String;
}
/** Two lat/lon pairs defining the extent of an element. */
interface _boundsType extends BaseType {
	/** The maximum latitude. */
	maxlat: Number;
	/** The maximum longitude. */
	maxlon: Number;
	/** The minimum latitude. */
	minlat: Number;
	/** The minimum longitude. */
	minlon: Number;
}
export interface boundsType extends _boundsType {
	constructor: { new(): boundsType };
}
export var boundsType: { new(): boundsType };

/** Information about the copyright holder and any license governing use of this file.  By linking to an appropriate license,
 * you may place your data into the public domain or grant additional usage rights. */
interface _copyrightType extends BaseType {
	/** Copyright holder (TopoSoft, Inc.) */
	author: String;
	/** Link to external file containing license text. */
	license?: String;
	/** Year of copyright. */
	year?: String;
}
export interface copyrightType extends _copyrightType {
	constructor: { new(): copyrightType };
}
export var copyrightType: { new(): copyrightType };

/** Used for bearing, heading, course.  Units are decimal degrees, true (not magnetic). */
export type degreesType = Number;
type _degreesType = Primitive._Number;

/** Represents a differential GPS station. */
export type dgpsStationType = Number;
type _dgpsStationType = Primitive._Number;

/** An email address.  Broken into two parts (id and domain) to help prevent email harvesting. */
interface _emailType extends BaseType {
	/** domain half of email address (hotmail.com) */
	domain: String;
	/** id half of email address (billgates2004) */
	id: String;
}
export interface emailType extends _emailType {
	constructor: { new(): emailType };
}
export var emailType: { new(): emailType };

/** You can add extend GPX by adding your own elements from another schema here. */
interface _extensionsType extends BaseType { }
export interface extensionsType extends _extensionsType {
	constructor: { new(): extensionsType };
}
export var extensionsType: { new(): extensionsType };

/** Type of GPS fix.  none means GPS had no fix.  To signify "the fix info is unknown, leave out fixType entirely. pps = military signal used */
export type fixType = 'none' | '2d' | '3d' | 'dgps' | 'pps';
interface _fixType extends Primitive._String {
	content: fixType;
}

/** GPX documents contain a metadata header, followed by waypoints, routes, and tracks.  You can add your own elements
 * to the extensions section of the GPX document. */
interface _gpxType extends BaseType {
	/** You must include the name or URL of the software that created your GPX document.  This allows others to
	 * inform the creator of a GPX instance document that fails to validate. */
	creator: String;
	/** You must include the version Number in your GPX document. */
	version: String;
	/** You can add extend GPX by adding your own elements from another schema here. */
	extensions?: extensionsType;
	/** Metadata about the file. */
	metadata?: metadataType;
	/** A list of routes. */
	rte?: rteType[];
	/** A list of tracks. */
	trk?: trkType[];
	/** A list of waypoints. */
	wpt?: wptType[];
}
export interface gpxType extends _gpxType {
	constructor: { new(): gpxType };
}
export var gpxType: { new(): gpxType };

/** The latitude of the point.  Decimal degrees, WGS84 datum. */
export type latitudeType = Number;
type _latitudeType = Primitive._Number;

/** A link to an external resource (Web page, digital photo, video clip, etc) with additional information. */
interface _linkType extends BaseType {
	/** URL of hyperlink. */
	href: String;
	/** Text of hyperlink. */
	text?: String;
	/** Mime type of content (image/jpeg) */
	type?: String;
}
export interface linkType extends _linkType {
	constructor: { new(): linkType };
}
export var linkType: { new(): linkType };

/** The longitude of the point.  Decimal degrees, WGS84 datum. */
export type longitudeType = Number;
type _longitudeType = Primitive._Number;

/** Information about the GPX file, author, and copyright restrictions goes in the metadata section.  Providing rich,
 * meaningful information about your GPX files allows others to search for and use your GPS data. */
interface _metadataType extends BaseType {
	/** The person or organization who created the GPX file. */
	author?: personType;
	/** Minimum and maximum coordinates which describe the extent of the coordinates in the file. */
	bounds?: boundsType;
	/** Copyright and license information governing use of the file. */
	copyright?: copyrightType;
	/** A description of the contents of the GPX file. */
	desc?: String;
	/** You can add extend GPX by adding your own elements from another schema here. */
	extensions?: extensionsType;
	/** Keywords associated with the file.  Search engines or databases can use this information to classify the data. */
	keywords?: String;
	/** URLs associated with the location described in the file. */
	link?: linkType[];
	/** The name of the GPX file. */
	name?: String;
	/** The creation date of the file. */
	time?: Date;
}
export interface metadataType extends _metadataType {
	constructor: { new(): metadataType };
}
export var metadataType: { new(): metadataType };

/** A person or organization. */
interface _personType extends BaseType {
	/** Email address. */
	email?: emailType;
	/** Link to Web site or other external information about person. */
	link?: linkType;
	/** Name of person or organization. */
	name?: String;
}
export interface personType extends _personType {
	constructor: { new(): personType };
}
export var personType: { new(): personType };

/** An ordered sequence of points.  (for polygons or polylines, e.g.) */
interface _ptsegType extends BaseType {
	/** Ordered list of geographic points. */
	pt?: ptType[];
}
export interface ptsegType extends _ptsegType {
	constructor: { new(): ptsegType };
}
export var ptsegType: { new(): ptsegType };

/** A geographic point with optional elevation and time.  Available for use by other schemas. */
interface _ptType extends BaseType {
	/** The latitude of the point.  Decimal degrees, WGS84 datum. */
	lat: Number;
	/** The latitude of the point.  Decimal degrees, WGS84 datum. */
	lon: Number;
	/** The elevation (in meters) of the point. */
	ele?: Number;
	/** The time that the point was recorded. */
	time?: Date;
}
export interface ptType extends _ptType {
	constructor: { new(): ptType };
}
export var ptType: { new(): ptType };

/** rte represents route - an ordered list of waypoints representing a series of turn points leading to a destination. */
interface _rteType extends BaseType {
	/** GPS comment for route. */
	cmt?: String;
	/** Text description of route for user.  Not sent to GPS. */
	desc?: String;
	/** You can add extend GPX by adding your own elements from another schema here. */
	extensions?: extensionsType;
	/** Links to external information about the route. */
	link?: linkType[];
	/** GPS name of route. */
	name?: String;
	/** GPS route Number. */
	Number?: number;
	/** A list of route points. */
	rtept?: wptType[];
	/** Source of data. Included to give user some idea of reliability and accuracy of data. */
	src?: String;
	/** Type (classification) of route. */
	type?: String;
}
export interface rteType extends _rteType {
	constructor: { new(): rteType };
}
export var rteType: { new(): rteType };

/** A Track Segment holds a list of Track Points which are logically connected in order. To represent a single GPS track where GPS reception was lost, or the GPS receiver was turned off, start a new Track Segment for each continuous span of track data. */
interface _trksegType extends BaseType {
	/** You can add extend GPX by adding your own elements from another schema here. */
	extensions?: extensionsType;
	/** A Track Point holds the coordinates, elevation, timestamp, and metadata for a single point in a track. */
	trkpt?: wptType[];
}
export interface trksegType extends _trksegType {
	constructor: { new(): trksegType };
}
export var trksegType: { new(): trksegType };

/** trk represents a track - an ordered list of points describing a path. */
interface _trkType extends BaseType {
	/** GPS comment for track. */
	cmt?: String;
	/** User description of track. */
	desc?: String;
	/** You can add extend GPX by adding your own elements from another schema here. */
	extensions?: extensionsType;
	/** Links to external information about track. */
	link?: linkType[];
	/** GPS name of track. */
	name?: String;
	/** GPS track Number. */
	Number?: number;
	/** Source of data. Included to give user some idea of reliability and accuracy of data. */
	src?: String;
	/** A Track Segment holds a list of Track Points which are logically connected in order. To represent a single GPS track where GPS reception was lost, or the GPS receiver was turned off, start a new Track Segment for each continuous span of track data. */
	trkseg?: trksegType[];
	/** Type (classification) of track. */
	type?: String;
}
export interface trkType extends _trkType {
	constructor: { new(): trkType };
}
export var trkType: { new(): trkType };

/** wpt represents a waypoint, point of interest, or named feature on a map. */
interface _wptType extends BaseType {
	/** The latitude of the point.  This is always in decimal degrees, and always in WGS84 datum. */
	lat: Number;
	/** The longitude of the point.  This is always in decimal degrees, and always in WGS84 datum. */
	lon: Number;
	/** Number of seconds since last DGPS update. */
	ageofdgpsdata?: Number;
	/** GPS waypoint comment. Sent to GPS as comment. */
	cmt?: String;
	/** A text description of the element. Holds additional information about the element intended for the user, not the GPS. */
	desc?: String;
	/** ID of DGPS station used in differential correction. */
	dgpsid?: Number;
	/** Elevation (in meters) of the point. */
	ele?: Number;
	/** You can add extend GPX by adding your own elements from another schema here. */
	extensions?: extensionsType;
	/** Type of GPX fix. */
	fix?: fixType;
	/** Height (in meters) of geoid (mean sea level) above WGS84 earth ellipsoid.  As defined in NMEA GGA message. */
	geoidheight?: Number;
	/** Horizontal dilution of precision. */
	hdop?: Number;
	/** Link to additional information about the waypoint. */
	link?: linkType[];
	/** Magnetic variation (in degrees) at the point */
	magvar?: Number;
	/** The GPS name of the waypoint. This field will be transferred to and from the GPS. GPX does not place restrictions on the length of this field or the characters contained in it. It is up to the receiving application to validate the field before sending it to the GPS. */
	name?: String;
	/** Position dilution of precision. */
	pdop?: Number;
	/** Number of satellites used to calculate the GPX fix. */
	sat?: Number;
	/** Source of data. Included to give user some idea of reliability and accuracy of data.  "Garmin eTrex", "USGS quad Boston North", e.g. */
	src?: String;
	/** Text of GPS symbol name. For interchange with other programs, use the exact spelling of the symbol as displayed on the GPS.  If the GPS abbreviates words, spell them out. */
	sym?: String;
	/** Creation/modification timestamp for element. Date and time in are in Univeral Coordinated Time (UTC), not local time! Conforms to ISO 8601 specification for date/time representation. Fractional seconds are allowed for millisecond timing in tracklogs. */
	time?: Date;
	/** Type (classification) of the waypoint. */
	type?: String;
	/** Vertical dilution of precision. */
	vdop?: Number;
}
export interface wptType extends _wptType {
	constructor: { new(): wptType };
}
export var wptType: { new(): wptType };

export interface document extends BaseType {
	/** GPX is the root element in the XML file. */
	gpx: gpxType;
}
export var document: document;
