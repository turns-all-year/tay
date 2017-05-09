const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.config.js');

// tell webpack to leave node_modules alone
// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => (nodeModules[mod] = `commonjs ${mod}`));

// add any that don't fit the above pattern
nodeModules['react-dom/server'] = 'commonjs react-dom/server';
nodeModules['react-router'] = 'commonjs react-router';

module.exports = Object.assign(baseConfig, {
  target: 'node',
  entry: [
    'web/server/serverSideRender.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'serverSideRender.js',
    libraryTarget: 'commonjs2',
  },
  externals: nodeModules,
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
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[hash:base64]-[name]-[local]',
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
    }),
    new ExtractTextPlugin('styles.css'),
  ],
});
