const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);
gulp.task('magic', () => {
  return gulp.src('src/widgets/text-widget/**/*.js')
     .pipe(babel({
         presets: ['es2015']
     }))
     .pipe(gulp.dest('src/widgets/text-widget/dist'));
    // return gulp.src('src/widgets/text-widget/text-widget.module.js')
    //     .pipe(babel({
    //         presets: ['es2015']
    //     }))
    //     .pipe(gulp.dest('dist'));
    //
    //     return gulp.src('src/widgets/text-widget/**/*.js')
    //    .pipe(sourcemaps.init())
    //    .pipe(babel({
    //        presets: ['es2015']
    //    }))
    //    .pipe(concat('text-widget.js'))
    //    .pipe(sourcemaps.write('.'))
    //    .pipe(gulp.dest('dist'));
});

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
  done();
}
