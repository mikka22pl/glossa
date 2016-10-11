'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var config      = require('./config');

gulp.task('serve.dev', ['dist'], function () {
    browserSync.init(
        {
            ui: {
                port: 5001
            },
            server: {
                baseDir: 'dist'
            },
            port: 5000
        });
    gulp.watch(['**/*.html', '**/*.js'], {cwd: 'app'}, ['build.dev', reload]);
});
