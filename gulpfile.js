var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

gulp.task('css', function() {
    return gulp.src('app/src/todo.css')
        .pipe(gulp.dest('build'));
});

gulp.task('es6', function () {
    return gulp.src(['app/src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(traceur({ experimental:true, blockBinding: true, sourceMaps: true }))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    return gulp.watch('app/src/**/*.js').on('change', function(file) {
        gulp.run('es6');
    });
});
