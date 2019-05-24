const { src, dest, task, parallel } = require('gulp')
const concat = require('gulp-concat')
const terser = require('gulp-terser')
const clean = require('gulp-clean-css')
const watch = require('gulp-watch')
const { init, write } = require('gulp-sourcemaps')

const isWatching = process.argv.includes('--watch')

const watchOptions = {
  verbose: true,
  ignoreInitial: false
}

/** Pipeline for javascript. */
const scripts = (dir, out, name) => {
  const build = () =>
    src(dir)
      .pipe(init())
      .pipe(concat(name))
      .pipe(terser().on('error', console.log))
      .pipe(write('./'))
      .pipe(dest(out))

  return isWatching ? watch(dir, watchOptions, build) : build()
}

/** Pipeline for css. */
const styles = (dir, out, name) => {
  const build = () =>
    src(dir)
      .pipe(init())
      .pipe(concat(name))
      .pipe(clean())
      .pipe(write('./'))
      .pipe(dest(out))

  return isWatching ? watch(dir, watchOptions, build) : build()
}

/** Twine project folder. */
const project = 'EssentialEstablishmentGenerator'

task('vendor-js', () =>
  scripts('vendors/**/*.js', `${project}/scripts`, 'vendor.min.js')
)

task('vendor-css', () =>
  styles('vendors/**/*.css', `${project}/styles`, 'vendor.min.css')
)

task('bundle-js', () =>
  scripts('source/script/**/*.js', `${project}/scripts`, 'bundle.min.js')
)

task('bundle-css', () =>
  styles('source/styles/**/*.css', `${project}/styles`, 'bundle.min.css')
)

task('build', parallel('vendor-js', 'bundle-js', 'vendor-css', 'bundle-css'))
