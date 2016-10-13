'use strict';

var gulp = require('gulp');

gulp.task('styles.css', ['clean'], function () {
    return gulp.src(
      [
        'node_modules/font-awesome/css/font-awesome.min.css'
      ])
      //.pipe(less())
      .pipe(gulp.dest('.tmp/css'));
});

gulp.task('styles.fonts.fontawesome', ['clean'], function () {
    return gulp.src(
      [
        'node_modules/font-awesome/fonts/*'
      ])
      .pipe(gulp.dest('.tmp/fonts'));
});

gulp.task('styles.fonts.bootstrap', ['clean'], function () {
    return gulp.src(
      [
        'bower_components/bootstrap/fonts/*'
      ])
      .pipe(gulp.dest('.tmp/fonts'));
});

gulp.task('styles.images', ['clean'], function () {
    return gulp.src('images/**/*.*')
      .pipe(gulp.dest('.tmp/images'));
});

gulp.task('styles', [
  'styles.css',
  'styles.fonts.fontawesome',
  'styles.fonts.bootstrap',
  'styles.images'
]);
