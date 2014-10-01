var gulp   = require('gulp');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var handleErrors = require('../util/handleErrors');
var paths  = require('../../package.json').paths;

gulp.task('adminScripts', function() {
	return gulp.src([paths.theme + '/admin/admin.js'], { base: paths.theme + '/admin' })
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.on('error', handleErrors)
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(notify({ message: 'Admin scripts task complete' }));
});