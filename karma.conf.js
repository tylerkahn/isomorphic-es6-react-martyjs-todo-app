module.exports = function(config) {
  process.env.NODE_ENV = 'test';

  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    browserify: {
      debug: true,
      transform: ['babelify', 'envify']
    },
    files: [
      'app/**.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'app/*.js': ['browserify', 'webpack'],
      'test/**/*.js': ['browserify', 'webpack'],
      'app/*[!server]/**/*.js': ['browserify', 'webpack']
    },
    reporters: ['spec'],
    browsers: ['Chrome'],
    autoWatch: true,
    singleRun: false,
    colors: true,
    port: 9876,
    logLevel: config.LOG_INFO
  });
};
