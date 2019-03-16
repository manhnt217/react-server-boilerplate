/* eslint-disable indent */
/* eslint-disable no-undef */
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
var clientLoaders = isProduction ? productionPluginDefine.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-env", "@babel/preset-react"],
          "plugins": ["dynamic-import-node"]
        }
      }
    ]
  },
  {
    test: /\.json$/,
    use: [
      {
        loader: 'json-loader'
      }
    ]
  }
  // {
  //   test: /\.module\.css$/,
  //   use: [
  //     {
  //       loader: require.resolve('style-loader'),
  //       options: {
  //         importLoaders: 1,
  //         sourceMap: true,
  //         modules: true,
  //         getLocalIdent: require('react-dev-utils/getCSSModuleLocalIdent')
  //       }
  //     }
  //   ]
  // }
]

module.exports = [
  {
    entry: './src/server.js',
    output: {
      path: __dirname + '/dist',
      filename: 'server.js',
      libraryTarget: 'var',
      library: 'GenLib',
      publicPath: '/'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    plugins: productionPluginDefine,
    module: {
      rules: rules
    }
  },
  // {
  //   entry: './src/app/browser.js',
  //   output: {
  //     path:  __dirname + '/dist/assets',
  //     publicPath: '/',
  //     filename: 'bundle.js'
  //   },
  //   plugins: clientLoaders,
  //   module: {
  //     rules: rules
  //   },
  //   resolve: {
  //     extensions: ['.js', '.jsx', '.module.css']
  //   }
  // }
];
