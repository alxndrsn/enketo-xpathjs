/*jshint node:true*/
"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		php: {
			server: {
				options: {
					port: 8080
				}
			}
		},
		karma: {
			options: {
				singleRun: true,
				reporters: ['dots']
			},
			headless: {
				configFile: 'test/karma.conf.js',
				browsers: ['Chrome', 'PhantomJS']
			}
		}
	});

	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('server', ['php:server:keepalive']);
	grunt.registerTask('default', ['php:server:keepalive']);

	grunt.registerTask('test', ['karma']);
};
