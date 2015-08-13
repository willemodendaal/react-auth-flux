var     gulp        = require('gulp'),
        notify      = require('gulp-notify'),
        plumber     = require('gulp-plumber');

var onError = function(err) {
    console.log(err);
};

//Copy statics
var staticSources = ['./src/**/*.{html}'];
gulp.task('copyhtml', function() {

    return gulp.src('./src/**/*.html')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(notify({ message: 'Files copied.' }));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['copyhtml']);
});