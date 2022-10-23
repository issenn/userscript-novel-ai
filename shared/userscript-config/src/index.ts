import type { MonkeyUserScript } from 'vite-plugin-monkey';

export const userscript: MonkeyUserScript = {
  namespace: `https://github.com/issenn`,
  author: `issenn`,
  homepageURL: `https://github.com/issenn/userscript-novel-ai`,
  source: `https://github.com/issenn/userscript-novel-ai`,
};

export const delay = async (n = 0) => {
  await new Promise<void>((res) => {
    setTimeout(res, n);
  });
};
