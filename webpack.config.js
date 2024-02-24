'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  
  entry: {
    profileWebsite: './index.js',
    jQuery: './node_modules/jquery/dist/jquery.min.js',
    bootstrap: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
  },
  output: {
    filename: '[name].webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Automatically load jQuery when $ or jQuery is used
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  }
}