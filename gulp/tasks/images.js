var gulp     = require('gulp');
var changed  = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var paths    = require('../../package.json').paths;

gulp.task('images', function() {
	var dest = paths.dist + '/images';

	return gulp.src(paths.images + '/**')
		.pipe(changed(dest)) // Only apply to changed files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});
