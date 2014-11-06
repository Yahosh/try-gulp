/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var gulp         = require('gulp');
var gutil  		 = require('gulp-util');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var browserify   = require('gulp-browserify');
var watchify     = require('gulp-watchify');
var streamify    = require('gulp-streamify');
var browserSync  = require('browser-sync');
var pkg          = require('../../package.json');
var paths        = pkg.paths;

// Hack to enable configurable watchify watching
var watching = false
gulp.task('enable-watch-mode', function() { watching = true });

// Browserify and copy js files
gulp.task('browserify', watchify(function(watchify) {
	return gulp.src(paths.scripts + '/app.js')
		.on('error', function(err) {
			gutil.log("Browserify error:", err);
		})
		.pipe(watchify({
			debug: true,
			watch: watching
		}))
		.pipe(gulp.dest(paths.dist + '/scripts'))
		.pipe(streamify(uglify()))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/scripts'))
		.pipe(browserSync.reload({ stream: true }));
}));

gulp.task('watchify', ['enable-watch-mode', 'browserify']);