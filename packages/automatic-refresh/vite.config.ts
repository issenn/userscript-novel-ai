import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import tsconfigPaths from 'vite-tsconfig-paths';
import { userscript } from '@issenn/userscript-config';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        ...userscript,
        name: {
          '': 'Automatic refresh',
          zh: '自动刷新',
          en: 'Automatic refresh',
        },
        description: {
          '': 'Automatic refresh.',
          zh: '自动刷新。',
          en: 'Automatic refresh.',
        },
        website: `https://greasyfork.org/scripts/453583`,
        updateURL: `https://github.com/issenn/userscript-novel-ai/raw/master/packages/automatic-refresh/dist/@issenn/automatic-refresh.meta.js`,
        downloadURL: `https://github.com/issenn/userscript-novel-ai/raw/master/packages/automatic-refresh/dist/@issenn/automatic-refresh.user.js`,
        // include: [
        //   /^http?:\/\/.*\.saraba1st\.com\/2b\/.*$/
        // ],
        match: [
          'http://*.saraba1st.com/2b/*',
          'https://*.saraba1st.com/2b/*',
          'https://bbs4.2djgame.net/home/*',
        ],
      },
      build: {
        metaFileName: true,
        // externalGlobals: {},
      },
    }),
  ],
});
