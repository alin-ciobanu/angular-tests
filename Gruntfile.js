module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'client/tests/config/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('test', function() {
        grunt.task.run(
            [
                'karma'
            ]
        );
    });

}
