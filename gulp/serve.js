'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var config      = require('./config');
var webpack     = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('../webpack.config.js');

gulp.task('app-watch', ['dist'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve-dist', ['dist'], function () {
    browserSync.init(
        {
            server: {
                baseDir: 'dist'
            },
            port: 5000
        });
    gulp.watch(['index.html', '**/*.js'], {cwd: 'dist'}, 'app-watch');
});

gulp.task('serve-dev', ['webpack-dev-server']);

gulp.task("webpack-dev-server", ['build-dev'], function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        webpackConfig
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(5000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});
