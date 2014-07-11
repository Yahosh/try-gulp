var gulp        = require('gulp');
var browserSync = require('browser-sync');
var paths		= require('../../package.json').paths;

gulp.task('browserSync', ['build'], function() {
	browserSync.init([paths.root + '/**'], {
		server: {
			baseDir: paths.root
		},
		notify: false
	});
});
