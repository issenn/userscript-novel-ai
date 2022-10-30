import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import tsconfigPaths from 'vite-tsconfig-paths';
import { userscript } from '@issenn/userscript-config';
import { dataURI } from '@issenn/userscript-utils';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        ...userscript,
        name: {
          '': 'Novel AI Tag support',
          zh: 'Novel AI Tag 支持',
          en: 'Novel AI Tag support',
        },
        description: {
          '': 'Novel AI Tag support.',
          zh: 'Novel AI Tag 关联支持。',
          en: 'Novel AI Tag support.',
        },
        icon: await dataURI('./src/assets/ai.logo.svg'),
        website: ``,
        updateURL: ``,
        downloadURL: ``,
        // include: [],
        match: [
          'https://www.baidu.com/'
        ],
      },
      build: {
        metaFileName: true,
        // externalGlobals: {},
      },
    }),
  ],
  // optimizeDeps: {
  //   disabled: false,
  //   esbuildOptions: {
  //     loader: {
  //       // ['.svg']: 'dataurl',
  //       // '.jpg': 'dataurl',
  //       // ['.png']: 'file',
  //     },
  //   }
  // },
});
