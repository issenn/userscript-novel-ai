import * as fs from 'node:fs';


export const dataURI = (path: string) => {
  const scheme: string = 'data:image/svg+xml;base64,'
  const base64 = fs.readFileSync(path, { encoding: 'base64' });
  return scheme + base64
}
