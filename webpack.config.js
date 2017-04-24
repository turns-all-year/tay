const path = require('path');

module.exports = {
  entry: [
    './src/client/index.jsx',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: __dirname,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
