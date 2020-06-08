const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); // to optimize images
const eslint = require('gulp-eslint'); // for identifying problems in JavaScript code
const terser = require('gulp-terser'); // to minify js (bring all on one line)
const cleanCSS = require('gulp-clean-css'); //to minify css
const purify = require('gulp-purifycss'); // to clean uneccesary Css - css that hasent been used 

gulp.task('imageMin', () => {
  return gulp.src('src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});


gulp.task('eslint', () => {
  return gulp.src(['src/views/*.vue'])
    .pipe(eslint({
      "parserOptions": { "ecmaVersion": "2018" }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('minifyHtml', () => {
  return gulp.src('src/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
}); 

gulp.task('minifyCss', () => {
  return gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('purifyCss', () => {
  return gulp.src('src/assets/css/*.css')
    .pipe(purify(['./public/**/*.js', './public/**/*.html', './public/**/*.vue']))
    .pipe(gulp.dest('dist/css'));
});

exports.default = gulp.series( 'imageMin', 'eslint', 'minifyHtml', 'purifyCss','minifyCss'); // to run all cmd: gulp