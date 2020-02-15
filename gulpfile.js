let gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin');


gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')
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
		'node_modules/mixitup/dist/mixitup.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', function () {
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.css',
		'node_modules/magnific-popup/dist/magnific-popup.css',
		'node_modules/normalize.css/normalize.css'
	])
		.pipe(concat('_libs.scss'))
		.pipe(gulp.dest('app/scss'))
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