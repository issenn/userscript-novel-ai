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
        icon: dataURI('./src/assets/default.logo.svg'),
        name: 'automatic refresh',
        description: 'Automatic refresh.',
        author: 'issenn',
        namespace: 'https://github.com/issenn',
        match: ['https://*.saraba1st.com/2b/*'],
      },
    //   build: {
    //     externalGlobals: {},
    //   },
    }),
  ],
});
