var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    jsdoc = require('gulp-jsdoc3'),
    htmlreplace = require('gulp-html-replace'),
    babelmin = require('gulp-babel-minify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

gulp.task('minifyCSS', function() {
    return gulp.src('src/css/*.css')
        .pipe(cssmin({
            compability: ''
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyHTML', function() {
    return gulp.src('src/*.html')
        .pipe(htmlreplace({
            'js': 'app.min.js',
            'css': 'style.min.css'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('minifyImg', function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
})

gulp.task('minifyJS', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(babelmin({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('jsdoc', function(cb) {
    return gulp.src('src/js/**/*.js')
        .pipe(jsdoc(cb));
});

gulp.task('default', ['minifyCSS', 'minifyImg', 'minifyJS', 'minifyHTML']);