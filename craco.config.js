const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@assets/*': path.resolve(__dirname, 'src/assets/*'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@components/*': path.resolve(__dirname, 'src/components/*'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@types/*': path.resolve(__dirname, 'src/types/*'),
		},
	},
};
