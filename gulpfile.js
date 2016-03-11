var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 8002,
    root: ['.']
  });
});

gulp.task('livereload', function () {
  gulp.src(['styles/*.css', 'scripts/*.js', '*.html'])
      .pipe(watch(['styles/*.css', 'scripts/*.js', '*.html']))
      .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('styles/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('styles'));
});

gulp.task('watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'webserver', 'livereload', 'watch']);