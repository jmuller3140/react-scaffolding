const merge = require('webpack-merge');
const common = require('./webpack.config.prod.js');

const config = {
  devtool: 'inline-source-map'
}

module.exports = merge.smart(config, common);