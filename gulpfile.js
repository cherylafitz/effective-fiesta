
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch');

gulp.task('concat-ais-css', function() {
  return gulp.src(['./assets/shared/styles/*.css','./assets/ais/styles/_aisCommon.css'])
    .pipe(concat('aisCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

gulp.task('concat-aisforms-css', function() {
  return gulp.src(['./assets/shared/styles/*.css','./assets/aisforms/styles/aisforms-common/*.css'])
    .pipe(concat('aisformsCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

gulp.task('concat-standardcommon-css', function() {
  return gulp.src('./assets/aisforms/styles/standard-common/*.css')
    .pipe(concat('standardCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

