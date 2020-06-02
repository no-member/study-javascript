const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');


const task = function (done) {
    // eslint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    // node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //browser
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

    done()
}

gulp.task('default', task);