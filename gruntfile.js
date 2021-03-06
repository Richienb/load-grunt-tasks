'use strict';

module.exports = grunt => {
	require('.')(grunt, {
		pattern: ['grunt*'],
		config: require('./package'),
		scope: 'devDependencies',
		requireResolution: true
	});

	grunt.initConfig({
		svgmin: {
			noop: {}
		}
	});

	grunt.registerTask('default', ['svgmin']);
};
