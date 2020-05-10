import ts from 'rollup-plugin-ts';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = 'useJQueryPlugin';
const input = 'index.ts';
const external = ['jquery', 'react'];
const globals = { jquery: 'jQuery', react: 'React' };
const tsconfig = 'tsconfig.json';

export default [
  {
    input,
    output: { file: pkg.module, format: 'es' },
    plugins: [ts({ tsconfig })],
    external
  },
  {
    input,
    output: { file: pkg.main, format: 'umd', name, sourcemap: true, globals },
    plugins: [ts({ tsconfig })],
    external
  },
  {
    input,
    output: { file: pkg.browser, format: 'umd', name, sourcemap: true, globals },
    plugins: [ts({ tsconfig }), terser()],
    external
  },
  {
    input,
    output: { file: pkg.types, format: 'es' },
    plugins: [dts()]
  }
];
