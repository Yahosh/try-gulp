var gulp  = require('gulp');
var del   = require('del');
var paths = require('../../package.json').paths;

// Clean Output Directory
gulp.task('clean', del.bind(null, [paths.dist]));