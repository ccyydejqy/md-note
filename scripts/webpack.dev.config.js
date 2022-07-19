// 开发环境配置
process.env.BUILD_ENV = 'dev';
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const apiMocker = require('mocker-api');

const devConfig = {
  mode: 'development', // 开发模式
  module: {},
  output: {
    filename: 'assets/js/[name].[hash].js', // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle，打包好的文件是在内存中的，但并不影响我们使用。
    publicPath: '/',
    chunkFilename: 'assets/js/[name]_[hash].js',
    clean: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': '"dev"',
    })
  ],
  devServer: {
    static: path.join(__dirname, '../src/app.tsx'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 8001, // 启动端口为 3001 的服务
    open: true, // 自动打开浏览器
    allowedHosts: [
      'developer.dev',
      'developer'
    ],
    onBeforeSetupMiddleware(devServer) {
      apiMocker(devServer.app,
        [
          'mock/index.js'
        ])
    },
  },
  devtool: 'eval-source-map'
};
module.exports = merge(baseConfig, devConfig); // 将baseConfig和devConfig合并为一个配置