var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var paths      = require('../../package.json').paths;

gulp.task('watch', ['setWatch', 'browserify'], function() {
	// If anything changes in the dist dir, reload the browser
	livereload.listen();
	gulp.watch(paths.dist + '/**').on('change', livereload.changed);

	// Watch .less files
	gulp.watch(paths.styles + '/**/*.less', ['styles']);

	// Watch images
	gulp.watch(paths.images + '/**', ['images']);
});