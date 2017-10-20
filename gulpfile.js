var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src',
  'node_modules/materialfoundation'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function() {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/what-input/dist/what-input.js',
    './bower_components/foundation-sites/dist/js/foundation.js',
    './node_modules/materialfoundation/js/switches.js',
    './node_modules/materialfoundation/js/ripple.js',
    './node_modules/materialfoundation/js/floating-label.js',
    './js/scripts.js',
  ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./scripts/'));
})

gulp.task('default', ['sass','js'], function() {
  gulp.watch(['scss/**/*.scss','js/**/*.js'], ['js']);
});
