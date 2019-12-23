const gulp = require('gulp');
const theo = require('gulp-theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

const webFormats = [
  { transformType: 'web', formatType: 'html' },
  { transformType: 'web', formatType: 'module.js' },
  { transformType: 'web', formatType: 'common.js' },
  { transformType: 'web', formatType: 'custom-properties.css' },
];

gulp.task('web', done => {
  webFormats.map(({ transformType, formatType }) =>
    gulp
      .src('./tokens/index.yml')
      .pipe(
        theo({
          transform: { type: transformType },
          format: { type: formatType },
        })
      )
      .pipe(gulp.dest('./dist'))
  );
  done();
});
