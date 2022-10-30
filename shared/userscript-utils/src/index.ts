import * as fs from 'node:fs/promises';


export const dataURI = async (filePath: string): Promise<string> => {
  const scheme: string = 'data:image/svg+xml;base64,'
  const base64: string = await fs.readFile(filePath, { encoding: 'base64' });
  return scheme + base64
}
