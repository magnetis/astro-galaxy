import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import json from 'rollup-plugin-json';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

const config = {
  input: './lib/icons/index.js',
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
    del({ targets: 'lib/icons', hook: 'buildEnd' }),
    filesize(),
  ],
};

export default config;
