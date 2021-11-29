const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// Set the mode to development or production
	mode: 'production',

	// Control how source maps are generated
	devtool: false,

	// Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js',
    },

    // Control how webpack notifies you of assets and entry points that exceed a specific file limit
    performance: {
		hints: false,
    	maxEntrypointSize: 90000,
    	maxAssetSize: 900000,
	},
});