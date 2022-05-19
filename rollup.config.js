import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';
// import { fileSync as find } from 'find';
import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';

const name = 'VueBabylonjs';
const plugins = [
  resolve(),
  babel({
    runtimeHelpers: true,
    plugins: ['@babel/plugin-external-helpers', '@babel/plugin-transform-runtime'],
    ignore: ['node_modules/!(@babylonjs)'],
  }),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      babylonjs: Object.keys(BABYLON),
      'babylonjs-gui': Object.keys(GUI),
    },
  }),
  cleanup(),
];
// const FILES = find(/.*\/.+\/.+\.js$/, './src').reduce((out, file) => ({
//   ...out,
//   [file.replace(/src\//, '').replace(/\.js$/, '')]: file,
// }), {});

export default [{
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'dist/esm.js',
  },
  external: [
    'babylonjs',
    'babylonjs-gui',
    'babylonjs-loaders',
  ],
  plugins,
}, {
  input: 'src/full.js',
  output: {
    format: 'umd',
    name,
    file: 'dist/umd.js',
  },
  plugins,
// }, {
//   input: {
//     index: 'src/core.js',
//     ...FILES,
//   },
//   experimentalCodeSplitting: true,
//   output: {
//     format: 'cjs',
//     dir: './lib',
//     globals,
//   },
//   plugins,
}];
