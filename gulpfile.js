"use strict"

const gulp = require("gulp")
const sass = require("gulp-sass")(require('sass'))

sass.compiler = require("node-sass")

gulp.task('default', watch)

gulp.task("sass", compilaSass)

function compilaSass() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("src/dist/css"))
}

function watch() {
  gulp.watch("src/scss/*.scss", compilaSass)
}