let gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  wait = require('gulp-wait');


gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(wait(100))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 15 versions", "> 1%", "ie 8", "ie 7"]
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function () {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/magnific-popup/dist/magnific-popup.css',
    'node_modules/rateyo/src/jquery.rateyo.css',
    'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css'
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app/"
    },
    notify: false
  });
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
  gulp.watch('app/**/*.html', gulp.parallel('html'))
  gulp.watch('app/js/**/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('css-libs', 'script', 'sass', 'watch', 'browser-sync'));
