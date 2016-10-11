'use strict';

var gulp = require('gulp');

gulp.task('dist.copy', ['build.dev'], function() {
	return gulp.src('.tmp/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('dist-js.copy', ['dist.copy'], function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('dist.html', ['dist-js.copy'], function() {
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'));
});
/*gulp.task('dist-js.rev', ['dist.copy'], function() {
	return gulp.src('dist/scripts/*.js')
	    .pipe(rev())
	    .pipe(revdel())
	    .pipe(gulp.dest('dist/scripts'))
	    .pipe(rev.manifest())
	    .pipe(gulp.dest('dist/scripts'));
});*/

/*gulp.task('dist-js.revreplace', ['dist-js.rev'], function() {
	var manifest = gulp.src('dist/scripts/rev-manifest.json');

	return gulp.src('dist/index.html')
		.pipe(revReplace({manifest: manifest}))
		.pipe(gulp.dest('dist'));
});*/

/*gulp.task('dist-css.rev', ['dist-js.revreplace'], function() {
	return gulp.src('dist/styles/main.css')
		.pipe(rev())
		.pipe(revdel())
		.pipe(gulp.dest('dist/styles'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('dist/styles'));
});*/

/*gulp.task('dist-css.revreplace', ['dist-css.rev'], function() {
	var manifest = gulp.src('dist/styles/rev-manifest.json');

	return gulp.src('dist/index.html')
		.pipe(revReplace({manifest: manifest}))
		.pipe(gulp.dest('dist'));
});*/

gulp.task('dist', ['dist.html']);
