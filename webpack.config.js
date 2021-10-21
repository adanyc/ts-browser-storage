const path = require('path');

module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'typescript-storage.js',
    libraryTarget: 'umd',
    library: 'typescript-storage'
  },
  resolve: {
    extensions: ['.webpack.js', 'web.js', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/\.(spec)\.ts$/]
      }
    ]
  }
};
