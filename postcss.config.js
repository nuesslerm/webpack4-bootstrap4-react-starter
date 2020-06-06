// It is handy to not have those transformations while we are developing
if (process.env.NODE_ENV !== 'test') {
  module.exports = {
    /**
    plugins: [
      require('autoprefixer'),
      require('cssnano'),
      // More postCSS modules here if needed
    ],
    **/
    plugins: [
      // post css plugins, can be exported to postcss.config.js
      require('cssnano'),
      require('precss'),
      require('autoprefixer'),
    ],
  };
}
