/* eslint-disable */
const ENV = process.env.NODE_ENV;
const isTest = ENV === 'test';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

// const ChunkHashReplacePlugin = require('chunkhash-replace-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'bundle.[contenthash].css',
  disable: ENV === 'development'
});

module.exports = {
  entry: {
    vendor: ['lodash', 'jquery'],
    app: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[name].[hash].js',
    pathinfo: ENV === 'development',
  },
  context: path.resolve(__dirname, 'src'),
  devtool: ENV === 'production' ? '#hidden-source-map' : '#eval',
  bail: ENV === 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: ENV === 'production',
                sourceMap: ENV === 'development',
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules/csskit-npm/scss'],
                sourceMap: ENV === 'development'
              }
            }
          ],
          // use style-loader in development
          fallback: ['style-loader'],
        }),
      },
      // only lint local *.vue files
      {
        enforce: 'pre',
        test: /.vue$/,
        loader: 'eslint-loader',
        options: {
          // cache: true,
          formatter: eslintFriendlyFormatter,
        },
        exclude: /node_modules/
      },
      // but use vue-loader for all *.vue files
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // loader: 'babel-loader',
        use: [
          "babel-loader",
          "eslint-loader",
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    autoprefixer,
    extractSass,
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    isTest ? undefined : new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    isTest ? undefined : new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'bundle.commons.[hash].js',
    }),
    // new HtmlWebpackPlugin()
  ].filter(p => !!p),
}

if (ENV === 'production') {
  // module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
