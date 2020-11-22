module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/corel-js/'
  : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Color Name'
    }
  },
}
