const path = require('path')
const moment = require('moment')
const { execSync } = require('child_process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 用于将组件的css打包成单独的文件输出到`lib`目录中
// 执行命令
execCmd = (cmd) => execSync(cmd, { encoding: 'utf-8' })

// 获取当前分支名称
const curBranchName = execCmd('git rev-parse --abbrev-ref HEAD')
// 获取最新commithash
const commitHash = execCmd(`git rev-parse --short ${curBranchName}`)
// 版本号
const appVersion = `${moment().format('YYYY-MM-DD HH:mm:ss')}_${commitHash}`
module.exports = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: path.posix.join(__dirname, '../dist/'),
    filename: 'assets/js/[name].[contenthash:8].js', // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle，打包好的文件是在内存中的，但并不影响我们使用。
    publicPath: '/',
    chunkFilename: 'assets/js/[name]_[contenthash:8].js',
    clean: true, // 每次将原文件删除之后再创建新文件
  },
  resolve: {
    modules: ['node_modules'], // 设置模块搜索的目录，设定目录以后，import模块路径，就可以从一个子目录开始写，这样就可以缩短模块引入路径。
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.json'],
    alias: {
      assets: path.posix.join(__dirname, '../src/assets'),
      common: path.posix.join(__dirname, '../src/common'),
      components: path.posix.join(__dirname, '../src/components'),
      dic: path.posix.join(__dirname, '../src/dic'),
      env: path.posix.join(__dirname, '../src/env'),
      pages: path.posix.join(__dirname, '../src/pages'),
      pipes: path.posix.join(__dirname, '../src/pipes'),    
      reduxConfig: path.posix.join(__dirname, '../src/reduxConfig'),
      router: path.posix.join(__dirname, '../src/router'),
      services: path.posix.join(__dirname, '../src/services'),
      utils: path.posix.join(__dirname, '../src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/, // ??? 为什么不能加js的设置，一加组件打包之后就引用不到
        use: 'babel-loader', // 使用tsc编译，所以需要依赖ts和ts.config.json配置文件
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          process.env.BUILD_ENV === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#F76A31',
                  'link-color': '#FF7226',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg?e|svg|ttf)$/,

        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              // ??? 图片打包这里的设置是无效的 https://blog.csdn.net/weixin_43714543/article/details/121201846
              name: 'image/[name].[ext]', // 打包后的图片放到img文件夹下
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      // 在生成的dist中添加script标签，引入生成的js
      template: path.posix.join(__dirname, '../src/index.html'),
      title: 'mdNote',
      filename: 'index.html',
      appVersion,
    }),
  ],
}