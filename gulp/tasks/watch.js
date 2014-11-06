var gulp  = require('gulp');
var paths = require('../../package.json').paths;

gulp.task('watch', ['watchify'], function() {
	// Watch theme .less files
	gulp.watch(paths.styles + '/**/*.less', ['styles']);

	// Watch images
	gulp.watch(paths.images + '/**', ['images']);

	// Watch editor.less
	gulp.watch(paths.theme + '/admin/editor.less', ['editorStyles']);

	// Watch admin styles
	gulp.watch(paths.theme + '/admin/admin.less', ['adminStyles']);

	// Watch admin scripts
	gulp.watch(paths.theme + '/admin/admin.js', ['adminScripts']);
});