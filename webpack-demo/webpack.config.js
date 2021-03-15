const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    // key 文件名
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    // name 指 entry 对象的 key
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // 清理 dist 目录
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist', // 服务器基目录
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 逆序调用，先 css-loader ,再 style-loader
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single'


  },

};