const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@assests/*': path.resolve(__dirname, 'src/assests/*'),
			'@assests': path.resolve(__dirname, 'src/assests'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@components/*': path.resolve(__dirname, 'src/components/*'),
		},
	},
};
