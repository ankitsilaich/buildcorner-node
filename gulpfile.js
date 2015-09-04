var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserSync2 =  require('browser-sync');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var less = require('gulp-less');
var path = require('path');
var minifyCss = require('gulp-minify-css');
var rimraf = require('gulp-rimraf'); // rimraf directly
var del = require('del');


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
//coffee compilation
gulp.task('coffee', function() {
  gulp.src('./assets/javascripts/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/javascripts/'))
});
//fonts copy
gulp.task('copyfonts', function() {
   gulp.src('./assets/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./public/fonts'));
});
//less compilation
gulp.task('less', function () {
  return gulp.src('./assets/stylesheets/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'fontawesome') ]
    }))
    .pipe(gulp.dest('./public/stylesheets/'));
});
//minify CSS
gulp.task('minify-css', function() {
  return gulp.src('./public/stylesheets/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/stylesheets/'));
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
//clean task
gulp.task('clean', function () {
  return del([
    './public/*','!./public/README.md']);
});
gulp.task('compress', function() {
  return gulp.src('./public/javascripts/**/*.js')
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('./public/javascripts/'));
});
gulp.task('prod', function() {
  gulp.start('less', 'coffee','copyfonts','minify-css');
});

gulp.task('dev', function() {
  gulp.start('clean','less', 'coffee','copyfonts');
});

gulp.task('default', function() {
  gulp.start('js-watch', 'server','watch');
});
