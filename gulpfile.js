var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var path = require('path');
var minifyCss = require('gulp-minify-css');
var del = require('del');
var sass = require('gulp-sass');
var rev = require('gulp-rev');

var paths = {
  scripts: ['./assets/javascripts/**/*.coffee'],
  images: 'client/img/**/*'
};


// process JS files and return the stream.

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('coffee-watch', browserSync.reload);


gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['coffee']);


	browserSync.init({
		notify: true,
		port: 3005,
		ui: false,
		proxy: 'localhost:3000'
	});

  // watch for changes in compiled files
	gulp.watch(paths.scripts).on('change', browserSync.reload);


});
//coffee compilation
gulp.task('coffee', function() {
  gulp.src(paths.scripts)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/javascripts/'));
});
gulp.task('js-move', function() {
  gulp.src('./assets/javascripts/**/*.js')
    // .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/javascripts/'));
});
//fonts copy
gulp.task('copyfonts', function() {
   gulp.src('./assets/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./public/fonts'));
});
//sass compilation
gulp.task('sass', function () {
  gulp.src('./assets/stylesheets/pages/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'));
});
//sass watch
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
//minify CSS
gulp.task('minify-css', function() {
  return gulp.src('./public/stylesheets/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/stylesheets/'));
});

// this task will create hashes for each js file so to remove cache in browsers 
gulp.task('hash-js', function () {
	return gulp.src(['./public/javascripts/**/*.js'], {base: 'assets'})
        .pipe(gulp.dest('./public/javascripts/'))  // copy original assets to build dir
        .pipe(rev())
        .pipe(gulp.dest('./public/javascripts/'))  // write rev'd assets to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest('./public/javascripts/')); // write manifest to build dir
});
gulp.task('server', function() {
  nodemon({
    script: 'app.js',
    watch: 'server',
    nodeArgs: ['--debug']
  }).on('restart', function() {
    setTimeout(function() {
      //  reload();
    }, 2500);
  });
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
  gulp.start( 'coffee','copyfonts','minify-css');
});

gulp.task('dev', function() {
  gulp.start('clean','js-move', 'coffee','copyfonts');
});

gulp.task('default', function() {
  gulp.start( 'server','watch');
});
