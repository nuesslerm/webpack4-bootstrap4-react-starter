// webpack setup tutorial for js|jsx, html:
// https://www.valentinog.com/blog/babel/

// webpack setup tutorial for s|css:
// https://github.com/pixelgoo/simple_webpack_boilerplate,
// https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5

// boostrap 4 and font-awespme setup tutorial:
// for webpack 4: https://medium.com/@estherfalayi/webpack-4-nicknamed-legato-is-out-and-the-community-is-still-on-the-hots-for-it-i-am-too-e9bee3d2e4a
// // webpack 3: https://medium.com/@estherfalayi/setting-up-webpack-for-bootstrap-4-and-font-awesome-eb276e04aaeb
// how to setup webpack quick-start: https://getbootstrap.com/docs/4.5/getting-started/webpack/

// very useful reference:
// webpack starter kit project with bootstrap4: https://github.com/nuesslerm/webpack-starter-kit

const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
  },

  // this is an html plugin that will automatically create an index.html from template
  // and insert your JS bundle there.
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve('./src/index.html'),
      // needs to be index.html
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      // filename doesn't need to be specified; will be main.css
      filename: '[name].css',
      // chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          // },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: 'postcss-loader',
          },
          {
            // First we transform SASS to standard CSS
            loader: 'sass-loader',
            // options: {
            //   implementation: require('sass'),
            // },
          },
        ],
      },
    ],
  },
};
