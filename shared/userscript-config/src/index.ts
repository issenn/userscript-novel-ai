import type { MonkeyUserScript } from 'vite-plugin-monkey';
import { dataURI } from '@issenn/userscript-utils';

export const userscript: MonkeyUserScript = {
  namespace: `https://github.com/issenn`,
  author: `issenn`,
  homepage: `https://www.issenn.ml/`,
  homepageURL: `https://github.com/issenn/userscript-novel-ai`,
  // website: ``,
  source: `https://github.com/issenn/userscript-novel-ai.git`,
  defaulticon: dataURI('./src/assets/default.logo.svg'),
  supportURL: `https://github.com/issenn/userscript-novel-ai/issues`,
  contributionURL: `https://afdian.net/@issenn`,
  // compatible: `chrome Tampermonkey`,
};

export const delay = async (n = 0) => {
  await new Promise<void>((res) => {
    setTimeout(res, n);
  });
};
