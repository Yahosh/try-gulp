var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var paths      = require('../../package.json').paths;

gulp.task('watch', ['setWatch', 'browserify'], function() {
	// If anything changes in the dist dir, reload the browser
	livereload.listen();
	gulp.watch(paths.dist + '/**').on('change', livereload.changed);

	// Watch theme .less files
	gulp.watch(paths.styles + '/**/*.less', ['styles']);

	// Watch editor.less
	gulp.watch(paths.theme + '/admin/editor.less', ['editorStyles']);

	// Watch admin styles
	gulp.watch(paths.theme + '/admin/admin.less', ['adminStyles']);

	// Watch admin scripts
	gulp.watch(paths.theme + '/admin/admin.js', ['adminScripts']);

	// Watch images
	gulp.watch(paths.images + '/**', ['images']);
});