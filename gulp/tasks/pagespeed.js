var gulp      = require('gulp');
var pagespeed = require('psi');
var domain    = require('../../package.json').domain;

// Run PageSpeed Insights
gulp.task('pagespeed', pagespeed.bind(null, {
  url: 'http://' + domain,
  strategy: 'mobile'
}));