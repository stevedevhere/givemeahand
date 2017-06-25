var   gulp = require('gulp'),
      sass = require('gulp-sass'),
      notify = require('gulp-notify'),
      rename = require('gulp-rename'),
  		cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      watch = require('gulp-watch');


gulp.task('watch', ['sass'], function() {
	gulp.watch('./src/styles/**/*.scss', ['sass']);
	gulp.watch('**/*.html');
});

gulp.task('sass', function() {
	return gulp.src('src/styles/**/*.scss')
	.pipe(sass().on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('src/styles/'))
});

gulp.task('default', ['watch']);
