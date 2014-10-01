/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var gulp         = require('gulp');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var streamify    = require('gulp-streamify');
var notify       = require('gulp-notify');
var browserify   = require('browserify');
var watchify     = require('watchify');
var source       = require('vinyl-source-stream');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var pkg          = require('../../package.json');
var shimmed      = pkg['browserify-shim'];
var paths        = pkg.paths;

/**
 * Add paths for libraries with no require calls
 * Shimmed libraries are automatically added from package.json
 */
var libs = []; // add non-shimmed scripts to array
for (name in shimmed) {
    if ( shimmed.hasOwnProperty(name) ) {
		libs.push(name);
    }
}

gulp.task('browserify', function() {
	var bundleMethod = global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		entries: [paths.scripts + '/app.js'] // Specify the entry point of your app
		// noParse: libs  // Ignore libraries with no requires to speed up builds, but currently causes an error with jquery
	});

	var bundle = function() {
		return bundler
			//.external(libs) // Require external libs in vendor.js (doesn't work with watchify for now)
			.bundle({debug: true})
			.on('error', handleErrors)
			.pipe(source('app.js')) // make stream compatible with gulp
			.pipe(gulp.dest(paths.dist + '/scripts'))
			.pipe(streamify(uglify()))
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest(paths.dist + '/scripts'));
	};

	if(global.isWatching) {
		bundler
			.on('update', bundle)
			.on('time', function(time) {
				bundleLogger.completed(time);
			});
	}

	return bundle();
});