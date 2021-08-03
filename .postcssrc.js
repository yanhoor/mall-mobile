module.exports = {
  plugins: {
    // autoprefixer: {
    //   overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    // },
    'postcss-px-to-viewport': {
      unitToConvert: "px",
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
      propList: [
        "*"
      ],
      viewportUnit: "vw", //指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: "vw",
      selectorBlackList: ['.px_not_to_vw', '.ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    }
  }
}
