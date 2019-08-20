// Karma configuration
// var browserify = require('browserify');
var istanbul = require('browserify-istanbul');

module.exports = function (config) {

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        plugins: [
            'karma-browserify',
            'karma-requirejs',
            'karma-es6-shim',
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'PhantomJS'
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

        // frameworks: ['jasmine', 'es6-shim'],
        frameworks: ['jasmine', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            // 'dev/app/build/WBC/css/*.css',
            'dev/libs/isMobile.min.js',
            'dev/libs/lodash.min.js',
            'node_modules/jquery/dist/jquery.js',
            // 'dev/libs/grunt-icons-loader.js',
            // 'dev/app/build/*.js',
            'dev/app/modules/*.app/index.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dev/app/modules/**/*.specs.js'
        ],


        // list of files to exclude
        exclude: [
            '/dev/app/modules/ccclosure.common/**/*.specs.js'
            //'app/**/yoda.*.js'
        ],

        browserify: {
            debug: true,
            watch: true,
            transform: ['stringify', 'browserify-angular-injector', 'browserify-shim', istanbul({
                ignore: ['node_modules/**', '**/modules/**/*.specs.js', '**/index.js', '**/*.html', '**/modules/gui.ng.components/**', '**/libs/**']
            })],
            extensions: ['.js']
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // 'app/dist/*.js': ['coverage']
            'dev/app/modules/*.app/index.js': ['browserify'],
        },

        // test results reporter to use9
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'], //, 'coverage', 'dots'

        coverageReporter: {
            dir: 'coverage/',
            reporters: [{ type: 'text-summary' }, { type: 'lcov', subdir: './' }]
        },

        // web server port
        port: 9000,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'], //'Chrome', 'PhantomJS'

        /*browsers: ['Chrome', 'Chrome_without_security'],

        // you can define custom flags
        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },*/

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        browserNoActivityTimeout: 200000
    })
}
