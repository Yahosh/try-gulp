var gulp         = require('gulp');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var rename 		 = require('gulp-rename');
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');
var paths 		 = require('../../package.json').paths;

gulp.task('styles', function() {
	return gulp.src([paths.styles + '/app.less'], { base: paths.styles })
		.pipe(less())
		.on('error', function(err) {
			gutil.log("LESS error:", err);
		})
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest(paths.dist + '/styles'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/styles'))
		.pipe(browserSync.reload({ stream: true }));
});