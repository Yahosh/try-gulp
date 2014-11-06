var gulp        = require('gulp');
var browserSync = require('browser-sync');
var pkg         = require('../../package.json');
var paths       = pkg.paths;

gulp.task('browserSync', ['watch'], function() {
	browserSync({
		proxy: pkg.domain,
		files: [
			paths.dist + "/**",
			// Exclude Map files
			"!" + paths.dist + "/**.map"
		]
	});
});