var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserSync2 =  require('browser-sync');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');

// process JS files and return the stream.

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', browserSync.reload);


gulp.task('watch', function () {
	gulp.watch('public/**/*.js', ['js-watch'])


	browserSync.init({
		notify: true,
		port: 3005,
		ui: false,
		proxy: 'localhost:3000'
	});

  // watch for changes in compiled files
	gulp.watch([
	'public/**/*.js'
	]).on('change', browserSync.reload);


});

gulp.task('server', function() {
  nodemon({
    script: 'app.js',
    watch: 'server',
    nodeArgs: ['--debug']
  }).on('restart', function() {
    setTimeout(function() {
      reload();
    }, 2500);
  })
});

gulp.task('default', function() {
  gulp.start('js-watch', 'server','watch');
});
