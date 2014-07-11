var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var paths 	   = require('../../package.json').paths;

gulp.task('images', function() {
	var dest = paths.dist + '/images';

	return gulp.src(paths.images + '/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});
