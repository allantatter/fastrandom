var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('src/*.js')
        .pipe(uglify({
            outSourceMap: true,
            preserveComments: 'some'
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('watch', function () {
    gulp.start('default');
    gulp.watch('src/*.js', ['default']);
});
