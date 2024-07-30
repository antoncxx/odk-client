const path = require('path');

console.log(path.resolve(__dirname, 'odk/library1/src'))

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@library1': path.resolve(__dirname, 'odk/library-1/src'),
      '@library2': path.resolve(__dirname, 'odk/library-2/src'),
      '@odk': path.resolve(__dirname, 'odk/src'),
    },
  },
};
