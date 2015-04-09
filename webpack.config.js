var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool : 'eval',

  entry: {
    app: './app/wp-content/themes/try-bees-matter/scripts/app.js'
  },

  output: {
    path: './app/wp-content/themes/try-bees-matter/dist/scripts/',
    filename: '[name].js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};