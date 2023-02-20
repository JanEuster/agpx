import * as gpx from './gpx_schema';

export const readGPXFromFile = (e: Event, callback: (f: string) => void): string | null => {
  console.log(e);
  if ((e.target as HTMLInputElement).files) {
    let file = ((e.target as HTMLInputElement).files as FileList)[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      console.log(e);
      callback(e.target?.result as string);
    };
    reader.readAsText(file);
  }
  return null;
};
