/* eslint-env node */

'use strict';

var bg = require('gulp-bg');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var gutil = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require("webpack");
var webpackBuild = require("gulp-webpack-build");
var path = require("path");
var _ = require('lodash');
var nodemon = require('nodemon');
var fs = require('fs');

var src = './app',
    webpackOptions = {
        debug: true,
        devtool: '#source-map'
    },
    webpackConfig = {
        useMemoryFs: true,
        progress: true
    }

gulp.task('env', function() {
  process.env.NODE_ENV = args.production ? 'production' : 'development';
});

gulp.task('eslint', function() {
  return gulp.src([
      'gulpfile.js',
      'app/**/*.js',
      'server/index.js',
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

function webpackTask(configFilename) {
    return gulp.src(path.join(".", configFilename), { base: path.resolve(".") })
        .pipe(webpackBuild.init(webpackConfig))
        .pipe(webpackBuild.props(webpackOptions))
        .pipe(webpackBuild.run())
        .pipe(webpackBuild.format({
            version: false,
            timings: true
        }))
        .pipe(webpackBuild.failAfter({
            errors: true,
            warnings: false
        }))
        .pipe(gulp.dest("."));
}

gulp.task('webpack-server', bg('webpack', '--config', 'webpack.config.server.js'));

gulp.task('start-server', bg("node", "dist/server.js"));

gulp.task("start-webpack-dev-server", bg('webpack-dev-server', '--config', 'webpack.config.client.js', '--hot', '--inline', '--port', '9009'));

gulp.task('server', ['start-webpack-dev-server', 'webpack-server', 'start-server'], function() {
    gulp.watch(['dist/server.js'], ['start-server']);
});

gulp.task('default', ['server']);
