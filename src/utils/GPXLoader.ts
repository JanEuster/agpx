import * as gpx from './gpx_schema';
import { XMLParser } from 'fast-xml-parser';
import Validator from 'detailed-xml-validator';
import gpxRules from './gpx_schema.xsd?raw';

export const readGPXFromFile = (e: Event, callback: (f: gpx.document | null) => void) => {
  console.log(e);
  if ((e.target as HTMLInputElement).files) {
    let file = ((e.target as HTMLInputElement).files as FileList)[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e);
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
        callback(obj);
      }
    };
    reader.readAsText(file);
  }
};
