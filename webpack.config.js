const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    //  发布路径一般把path作为服务区的根路径
    publicPath: 'http://localhost:2000/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        use: 'vue-loader',
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            // options: { modules: true },
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            // options: { sourceMap: true }
          },
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            // options: { modules: true },
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            // options: { sourceMap: true }
          },
        ],
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx'],
    alias: {},
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('index.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'my-vue-electron',
    //   template: path.resolve(__dirname, 'index.html'),
    //   inject: 'body'
    // }),
  ],
  devtool: 'source-map',
  target: 'electron-renderer',
  devServer: {
    port: 2000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, 'dist'),
    // contentBase: path.join(__dirname, 'dist'),
    // publicPath: "http://localhost:2000/dist/"
  },
};
