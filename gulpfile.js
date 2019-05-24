const { src, dest, task, parallel } = require('gulp')
const concat = require('gulp-concat')
const terser = require('gulp-terser')
const clean = require('gulp-clean-css')
const watch = require('gulp-watch')

const isWatching = process.argv.includes('--watch')

const options = {}

const watchOptions = {
  verbose: true,
  ignoreInitial: false
}

const processScripts = (dir, out, name) => {
  const build = () =>
    src(dir, options)
      .pipe(concat(name))
      .pipe(terser().on('error', console.log))
      .pipe(dest(out))

  return isWatching ? watch(dir, watchOptions, build) : build()
}

const processStyles = (dir, out, name) => {
  const build = () =>
    src(dir, options)
      .pipe(concat(name))
      .pipe(clean())
      .pipe(dest(out))

  return isWatching ? watch(dir, watchOptions, build) : build()
}

task('vendor-js', () =>
  processScripts(
    'EssentialEstablishmentGenerator/**/*.js',
    'EssentialEstablishmentGenerator/scripts',
    'vendor.min.js'
  )
)

task('vendor-css', () =>
  processStyles(
    'EssentialEstablishmentGenerator/**/*.css',
    'EssentialEstablishmentGenerator/styles',
    'vendor.min.css'
  )
)

task('bundle-js', () =>
  processScripts(
    'source/**/*.js',
    'EssentialEstablishmentGenerator/scripts',
    'bundle.min.js'
  )
)

task('bundle-css', () =>
  processStyles(
    'source/**/*.css',
    'EssentialEstablishmentGenerator/styles',
    'bundle.min.css'
  )
)

task('build', parallel('vendor-js', 'bundle-js', 'vendor-css', 'bundle-css'))
