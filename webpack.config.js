// Node.js的path Api
var path = require('path')

// webpack
var webpack = require('webpack')

// 往html模版注入打包后的javaScript文件
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 样式单独输出css文件插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// var Dashboard = require('webpack-dashboard')
// var dashboard = new Dashboard()

// webpack dashboard的控制台插件
var DashboardPlugin = require('webpack-dashboard/plugin')

// postcss的配置文件
var postConfig = require('./postcss.config.js')

module.exports = {
  // 入口文件
  entry: {
    index: './src/index.js'
  },

  output: {
    // 打包后的文件的存放路径
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件名
    filename: '[name].js',
    // 打包后模块的前缀路径
    // publicPath: 'http://localhost:2000/',
    // 配置按需加载的模块名称，和require.ensure配合使用
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      {
        // babel－loader
        // 配置文件在／.babelrc
        use: 'babel-loader',
        // 匹配将被loader解析的文件
        test: /\.(js|jsx)$/,
        // 要解析的文件或文件夹的位置
        include: /src/
        // 不要解析的文件或文件夹的位置
        // exclude: /(node_modules|bower_components)/
      },
      {
        use: 'vue-loader',
        test: /\.vue$/,
        include: path.resolve(__dirname, 'src')
        // include: /src/
        // exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            // options: { modules: true },
            loader: 'css-loader'
          }
        ]
        // exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            // options: { modules: true },
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
            // options: { sourceMap: true }
          }
        ]
        // exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            // options: { modules: true },
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: postConfig
          },
          {
            loader: 'sass-loader'
            // options: { sourceMap: true }
          }
        ]
        // exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },

  resolve: {
    // 设置代码中资源文件可以省略的文件后缀名
    extensions: ['.vue', '.js', '.jsx'],
    // 文件或文件夹路径缩写
    alias: {
      vue: 'vue/dist/vue.js',
      style: path.resolve(__dirname, './src/style'),
      components: path.resolve(__dirname, './src/components')
    }
  },

  // loader预设项
  resolveLoader: {
    // 设置对不写完整名称的loader，尝试添加”-loader“后缀，再通过对应的loader加载文件
    moduleExtensions: ['-loader']
  },

  // 插件
  plugins: [
    // 定义webpack的环境中的变量设置
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // webpack打包仪表盘插件
    new DashboardPlugin(),
    // new DashboardPlugin(dashboard.setData),
    // webpack热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('index.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    // 向html模版中注入打包后的javascript文件
    new HtmlWebpackPlugin({
      title: 'my-vue-electron',
      // 模板路径
      template: './index.html',
      // template: path.resolve(__dirname, 'index.html'),
      // javascript文件注入的位置
      inject: 'body'
    })
  ],

  // webpack的source－map生成方式
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',

  // 将文件解析为electron的渲染进程文件
  target: 'electron-renderer',

  // webpack-sever的配置项
  devServer: {
    port: 2000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    overlay: {
      warning: true,
      error: true
    },
    contentBase: path.resolve(__dirname, 'src')
    // contentBase: path.join(__dirname, 'dist'),
    // publicPath: "http://localhost:2000/"
  },

  // 配置哪些Node.js的Api需要转译，哪些不需要
  node: {
    __dirname: false,
    __filename: false
  },

  // 配置不需要打包进javascript文件的依赖文件
  externals: {
    // vue: 'Vue'
  },

  watchOptions: {
    // webpack在热更新（watch模式下）要忽略监听的文件或文件夹
    ignored: /node_modules/
  },

  // 在编译时遇到错误就停止编译
  bail: true
}
