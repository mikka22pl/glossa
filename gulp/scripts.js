'use strict';

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var fs         = require('fs');
var path       = require('path');
var scripts    = require('./vendor.scripts');

/*gulp.task('scripts.browser', ['clean'], function() {
  return gulp.src('js/browser.js')
    .pipe(gulp.dest('.tmp/js'));
});*/

gulp.task('scripts.vendor', ['clean'], function () {
    var sourcePaths  = [];
    var chunkName    = 'vendor.js';
    var chunkScripts = scripts.chunks.vendor;

    chunkScripts.forEach(function (script) {
        var scriptRelativePath = scripts.paths[script];
        var scriptAbsolutePath = path.join(__dirname, '..', scriptRelativePath);

        if (!fs.existsSync(scriptAbsolutePath)) {
            throw new Error('Nie można odnaleźć wymaganego pliku: ' + scriptAbsolutePath);
        } else {
            sourcePaths.push(scriptRelativePath);
        }
    });
    return gulp.src(sourcePaths)
        .pipe(concat(chunkName))
        .pipe(gulp.dest(".tmp/js"));
});
gulp.task('scripts', ['scripts.vendor']);
