import * as gpx from './gpx_schema';
import { XMLParser } from 'fast-xml-parser';
import Validator from 'detailed-xml-validator';
import gpxRules from './gpx_schema.xsd?raw';

export const readGPXFromFile = (e: Event, callback: (f: gpx.document | null) => void) => {
  if ((e.target as HTMLInputElement).files) {
    let file = ((e.target as HTMLInputElement).files as FileList)[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let xmlData = e.target?.result as string;
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: ''
      });
      const obj = parser.parse(xmlData) as gpx.document;

      const validator = new Validator(gpxRules);
      const failures = validator.validate(xmlData);
      if (failures.length > 0) {
        callback(null);
      } else {
        // correct for incorrect xml parsing
        // when there is only one track or track segment
        // the parser will not detect know that there can be multiple
        // of these tags, as the schema specifies
        if (obj.gpx.trk?.length == undefined) {
          obj.gpx.trk = [obj.gpx.trk as any]; // any to stop it complaining
        }
        for (const trk of obj.gpx.trk) {
          if (trk.trkseg?.length == undefined) {
            trk.trkseg = [trk.trkseg as any]; // any to stop it complaining
          }
        }

        callback(obj);
      }
    };
    reader.readAsText(file);
  }
};
