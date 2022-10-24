import type { MonkeyUserScript } from 'vite-plugin-monkey';
import defaultLogoSvg from "./assets/default.logo.svg";

export const userscript: MonkeyUserScript = {
  namespace: `https://github.com/issenn`,
  author: `issenn`,
  homepage: `https://www.issenn.ml/`,
  homepageURL: `https://github.com/issenn/userscript-novel-ai`,
  // website: ``,
  source: `https://github.com/issenn/userscript-novel-ai.git`,
  defaulticon: defaultLogoSvg,
  supportURL: `https://github.com/issenn/userscript-novel-ai/issues`,
  contributionURL: `https://afdian.net/@issenn`,
  // compatible: `chrome Tampermonkey`,
};

export const delay = async (n = 0) => {
  await new Promise<void>((res) => {
    setTimeout(res, n);
  });
};
