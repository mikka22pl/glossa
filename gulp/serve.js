'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var config      = require('./config');

gulp.task('app-watch', ['dist'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve.dev', ['dist'], function () {
    browserSync.init(
        {
            server: {
                baseDir: 'dist'
            },
            port: 5000
        });
    gulp.watch(['index.html', '**/*.js'], {cwd: 'dist'}, 'app-watch');
});
