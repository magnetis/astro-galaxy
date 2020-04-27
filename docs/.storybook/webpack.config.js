const path = require('path');
const maxAssetSize = 1024 * 1024;

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@magnetis/astro-galaxy-core': path.resolve(__dirname, '../../packages/core/src'),
      '@magnetis/astro-galaxy-icons': path.resolve(
        __dirname,
        '../../packages/icons/lib/index.es.js'
      ),
      '@magnetis/astro-galaxy-tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@magnetis/astro-galaxy-components': path.resolve(__dirname, '../../packages/components/src'),
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 30 * 1024,
  //     maxSize: maxAssetSize,
  //   },
  // },
  // performance: {
  //   maxAssetSize: maxAssetSize,
  // },
};
