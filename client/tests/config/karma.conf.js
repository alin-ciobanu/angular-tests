module.exports = function(config) {
    config.set({
        basePath: './../../',

        frameworks: ['jasmine'],

        reporters: ['progress', 'coverage'],

        // list of files / patterns to load in the browser
        files: [

            'lib/jquery/dist/jquery.js',
            'lib/bootstrap/dist/js/bootstrap.min.js',
            'lib/jquery-ui/jquery-ui.js',
            'lib/angular/angular.js',
            'lib/angular-mocks/angular-mocks.js',
            'lib/underscore/underscore-min.js',
            'app/js/app.js',

            'app/js/controller/*.js',
            'app/js/service/*.js',
            'app/js/directive/*.js',
            'app/js/filter/*.js',

            // tests
            {pattern: 'tests/services/*.js', included: true},
            {pattern: 'tests/controllers/*.js', included: true},
            {pattern: 'tests/directive/*.js', included: true},

            // templates
            'app/views/*.html'

        ],

        exclude: [
            // excluded files
        ],

        // generate js files from html templates
        preprocessors: {
            'app/views/*.html': ['ng-html2js'],
            'app/js/controller/*.js': ['coverage'],
            'app/js/service/*.js': ['coverage'],
            'app/js/directive/*.js': ['coverage'],
            'app/js/filter/*.js': ['coverage'],
            'app/js/*.js': ['coverage']
        },

        port: (new Date()).getTime() % 500 + 65000,

//        logLevel: config.LOG_DEBUG,

        autoWatch: true,
//        Available browsers:
//        Chrome
//        ChromeCanary
//        Safari
//        Firefox
//        Opera
//        PhantomJS
//        IE
        browsers: [
            'PhantomJS'
        ],

        coverageReporter: {
            type : 'html',
            dir :'tests/coverage/'
//            file: 'coverage-report.txt'
        }

    });
};
