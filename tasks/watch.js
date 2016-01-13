'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        babel: {
            files: ['src/**/*.js'],
            tasks: ['babel']
        }
    };

};
