'use strict';

var gulp   = require('gulp');
var del    = require('del');
var config = require('./config');

gulp.task('clean', function(done) {
  del([config.destinations.dist, '.tmp']).then(function () {
    done();
  });
});
