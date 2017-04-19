/* eslint-disable */
const ENV = process.env.NODE_ENV;
const isTest = ENV === 'test';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');

// const ChunkHashReplacePlugin = require('chunkhash-replace-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'css/bundle.[contenthash].css',
  disable: ENV === 'development'
});

module.exports = {
  entry: {
    // vendor: ['lodash', 'jquery'],
    app: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/bundle.[name].[hash].js',
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
        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "test"),
          // path.resolve(__dirname, "src/components"),
          // path.resolve(__dirname, "src/mixins"),
          // path.resolve(__dirname, "src/store"),
        ],
        // "exclude" should be used to exclude exceptions
        // try to prefer "include" when possible
        // exclude: /node_modules/,
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
    new CleanObsoleteChunks(),
    // isTest ? undefined : new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    // isTest ? undefined : new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   filename: 'bundle.commons.[hash].js',
    // }),
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
