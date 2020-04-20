module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    ['@babel/plugin-transform-react-jsx', { pragmaFrag: 'React.Fragment' }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
  ],
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react'],
    },
  },
  ignore: ['node_modules/**'],
};
