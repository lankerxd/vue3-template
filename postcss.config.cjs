module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 3,
    },
    // lib-flexible + postcss-pxtorem
    // main.ts中引入  import 'lib-flexible'
    // 'postcss-pxtorem': {
    //   rootValue: 37.5,
    //   propList: ['*'],
    // },
  },
}
