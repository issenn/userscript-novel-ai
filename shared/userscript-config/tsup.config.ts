import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  target: 'esnext',
  outDir: 'dist',
  format: [
    'cjs',
    'esm'
  ],

  loader: {
    // '.jpg': 'dataurl',
    '.svg': 'dataurl',
  },

  sourcemap: true,

  // dts: {
  //   // build types for `src/index.ts` only
  //   // otherwise `Options` will not be exported by `tsup`, not sure how this happens, probably a bug in rollup-plugin-dts
  //   // entry: './src/index.ts',
  //   entry: ['src/index.ts'],
  //   // resolve: true,
  //   // only: true,
  // },
  dts: true,

  // https://tsup.egoist.dev/#generate-typescript-declaration-maps--d-ts-map
  // https://github.com/egoist/tsup/issues/564
  // onSuccess: 'tsc --emitDeclarationOnly --declaration',
});
