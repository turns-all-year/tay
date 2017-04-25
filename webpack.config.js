const path = require('path');

module.exports = {
  entry: [
    './src/web/client/index.jsx',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[hash:base64]-[name]-[local]',
              modules: true,
            },
          },
          /* {
            loader: 'postcss-loader',
          },*/
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
