// It is handy to not have those transformations while we are developing
if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    /**
    plugins: [
      require('autoprefixer'),
      require('cssnano'),
      // More postCSS modules here if needed
    ],
    **/
    plugins: function () {
      // post css plugins, can be exported to postcss.config.js
      return [require('cssnano'), require('precss'), require('autoprefixer')];
    },
  };
}
