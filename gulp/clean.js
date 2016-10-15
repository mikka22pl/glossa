'use strict';

var gulp   = require('gulp');
var del    = require('del');

gulp.task('clean', function(done) {
  del(['dist']).then(function () {
    done();
  });
});
