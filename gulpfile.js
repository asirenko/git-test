var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('copy', function(){
  return gulp
    .src('src/*.*')
    .pipe(gulp.dest('build/'));
});


gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('build/'));
});

gulp.task('pug:watch', function buildHTML() {
  gulp.watch('src/*.pug', ['pug']);
});
