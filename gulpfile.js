var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'src/css/*.css',

    ])
        .pipe(concat('style.css'))
        .pipe(plumber())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});


gulp.task('js', function() {

    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'src/js/*.js'

    ])
        .pipe(concat('assets.js'))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'watch']);
