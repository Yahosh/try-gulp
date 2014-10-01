var gulp         = require('gulp');
var less         = require('gulp-less');
var notify       = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var rename 		 = require('gulp-rename');
var handleErrors = require('../util/handleErrors');
var paths 		 = require('../../package.json').paths;

gulp.task('adminStyles', function() {
	return gulp.src([paths.theme + '/admin/admin.less'], { base: paths.theme + '/admin' })
		.pipe(less())
		.on('error', handleErrors)
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({ basename: 'admin' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(notify({ message: 'Admin styles task complete' }));
});

gulp.task('editorStyles', function() {
	return gulp.src([paths.theme + '/admin/editor.less'], { base: paths.theme + '/admin' })
		.pipe(less())
		.on('error', handleErrors)
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename({ basename: 'editor' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/admin'))
		.pipe(notify({ message: 'Editor styles task complete' }));
});