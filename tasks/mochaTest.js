'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    return {
        test: {
            options: {
                reporter: 'spec'
            },
            src: ['.dist/test/**/*.js']
        }
    };

};
