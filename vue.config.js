/**
 * Created by kankan on 2019/9/3.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
// 解决 net::ERR_CONNECTION_TIMED_OUT？？？
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8083,
  },
  /*publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },*/
};
