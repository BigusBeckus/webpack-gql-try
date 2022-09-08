const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  output: {
    clean: true,
    globalObject: 'this',
    publicPath: '',
  },
  externalsPresets: { node: true },
  resolve: {
    extensions: ['.js', '.mjs', '.ts', '.mts', '.gql'],
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
};
