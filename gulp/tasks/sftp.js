var gulp    = require('gulp');
var sftp    = require('gulp-sftp')
var changed = require('gulp-changed');
var paths   = require('../config').paths;

gulp.task('sftp', function() {
  return gulp.src([paths.root + '/**'])
    .pipe(changed(paths.app))
    .pipe(gulp.dest(paths.app))
    .pipe(sftp({
      host: 'wpbeesmatter.build.webershandwick.com',
      auth: 'keyMain',
      remotePath: '/var/www/wpbeesmatter/www/'
    }));
});
