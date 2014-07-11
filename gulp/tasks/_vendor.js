// bundle vendor shit
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var streamify    = require('gulp-streamify');
var notify       = require('gulp-notify');
var livereload   = require('gulp-livereload');
var browserify   = require('browserify');
var watchify     = require('watchify');
var source       = require('vinyl-source-stream');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var pkg 		 = require('../../package.json');

var paths = pkg.paths;
var shimmed = pkg["browserify-shim"];

/**
 * Add paths for scripts to be included in the vendor bundle
 * Shimmed libraries are automatically added from package.json
 */
var libs = []; // add non-shimmed scripts to array
for (name in shimmed) {
    if ( shimmed.hasOwnProperty(name) ) {
		libs.push(name);
    }
}

gulp.task('vendor', function () {
	return browserify('./gulp/vendor.js')
		.require(libs)
		.bundle()
		.pipe(source('vendor.js'))
		.pipe(gulp.dest(paths.dist + '/scripts'))
		.pipe(streamify(uglify()))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.dist + '/scripts'))
		.pipe(notify({ message: 'Browserify task complete' }));
})

exports.libs = libs;