import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const config = {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    babel({
      exclude: './node_modules/**',
    }),
    autoExternal(),
    peerDepsExternal(),
    json(),
    // resolve(),
    localResolve(),
    commonjs({
      namedExports: {
        './node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement',
          'createContext',
          'forwardRef',
        ],
      },
    }),
    filesize(),
  ],
  // external: ['react', 'react-dom', 'prop-types', 'styled-components'],
};

export default config;
