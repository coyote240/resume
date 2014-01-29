module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        markdownpdf: {
            options: {
                cssPath: '../../../css/resume.css'
            },
            files: {
                src: 'src/*.md',
                dest: 'distribute'
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');

    grunt.registerTask('default', ['markdownpdf']);
};
