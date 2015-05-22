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
        },

        pandoc: {
            configs: {
                publish: 'docx'
            },
            files: {
                from: [
                    'src/resume.md'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.loadNpmTasks('grunt-pandoc');

    grunt.registerTask('default', ['markdownpdf']);
};
