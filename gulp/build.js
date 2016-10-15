'use strict';

var gulp = require('gulp');

gulp.task('build-dist', ['scripts-dist', 'styles']);
gulp.task('build-dev', ['scripts', 'styles']);
