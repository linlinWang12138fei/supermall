module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      //一般的设计稿是：750*1334 的宽高
      viewportWidth: 375,//视窗的宽度，对应的是我们设计稿的宽度(750是高清屏，一般需要/2)
      viewportHeight: 667,//视窗的高度，对应的是我们设计稿的高度。（也可以不配做）
      unitPrecision: 5,// 指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
      viewportUnit: 'vw',// 指定需要转换成的视窗单位。建议使用vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item', 'grid-view', 'bottom-bar', 'content'],//指定不需要转换的类
      minPixelValue: 1,// 小于或等于 1px 不转换为视窗单位
      mediaQuery: false,// 允许在媒体查询中转换 px
      exclude: [/^(TabBar | Category){\.vue}$/],//这里使用正则表达式，排除匹配的内容
    }
  }
}
