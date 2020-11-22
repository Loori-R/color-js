module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/color-js/'
  : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Color Name'
    }
  },
}
