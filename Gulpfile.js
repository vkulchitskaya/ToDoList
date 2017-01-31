var  
    gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    stylus = require('gulp-stylus'), // Плагин для Stylus
    csso = require('gulp-csso'), // Минификация CSS
    uglify = require('gulp-uglify'); // Минификация JS


gulp.task('build', ['styles', 'jadehtml', 'js']);

gulp.task('styles', function () {
  return gulp.src('./src/stylus/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css'));
});



gulp.task('jadehtml', function() {
  gulp.src('./src/jade/Hello.jade')
   .pipe(jade({
     client: true
    }))
    .pipe(gulp.dest('./build/html'))
});


gulp.task('js', function() {
    gulp.src('./src/js/script.js')
        .pipe(gulp.dest('./build/js'))
});