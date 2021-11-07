const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('../scripts/paths');

module.exports = {
  devtool: 'inline-source-map',
  entry: [paths.appIndexJs],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        include: [path.resolve(paths.appSrc)],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              discardDuplicates: true,
              importLoaders: 1,
              // This enables local scoped CSS based in CSS Modules spec
              modules: true,
              // generates a unique name for each class (e.g. app__app___2x3cr)
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    // Aliases help with shortening relative paths
    // 'Components/button' === '../../../components/button'
    alias: {
      Components: path.resolve(paths.appSrc, 'components'),
      Containers: path.resolve(paths.appSrc, 'containers'),
      Utils: path.resolve(paths.appSrc, 'utils'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.appHtml,
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
