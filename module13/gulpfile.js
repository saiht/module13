var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    pleeease = require('gulp-pleeease');

gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
   // configurer mon serveur
    browserSync({
        port: 3000, //port de connection
        server: { // serveur
            baseDir: "./", //base
            index: "index.html" //fichier à charger
        }
    });
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
  .pipe(pleeease(
    {
      "autoprefixer": { "browsers": 'last 3 versions' },
      "rem": '10px',
      "opacity": true,
      "filters": true,
      "pseudoElements": true,
      "minifier": true,
      "mqpacker": true,
      "sourcemaps": false
    }
  ))
  .pipe(gulp.dest('./dest'));
});

// tache par default
gulp.task('default', ['browser-sync'], function () {
// watch
  gulp.watch('**/*.css',['css']);
  gulp.watch(["index.html", "dest/*.css"]).on('change', browserSync.reload);
});
