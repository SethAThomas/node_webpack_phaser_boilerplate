const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
	// Set the mode to development or production
	mode: 'development',

	// Control how source maps are generated
	devtool: 'inline-source-map',

	// Spin up a server for quick development
	devServer: {
		historyApiFallback: true,
		static: paths.public,
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
});