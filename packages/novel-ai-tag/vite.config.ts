import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';
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
        // icon: 'https://vitejs.dev/logo.svg',
        icon: dataURI('./src/assets/ai.logo.svg'),
        name: 'Novel AI Tag 支持',
        description: 'Novel AI Tag 关联支持',
        author: 'issenn',
        namespace: 'https://github.com/issenn',
        match: ['https://www.baidu.com/'],
      },
    //   build: {
    //     externalGlobals: {},
    //   },
    }),
  ],
});
