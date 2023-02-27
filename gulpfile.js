const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minifycss = require('gulp-clean-css')
const rename = require("gulp-rename");

function buildStyles() {
    return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('css'))
}

function watchTask() {
    watch(['scss/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)