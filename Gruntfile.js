module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                span: false
            },
            files: ['**/*.md'],
            tasks: ['default']
        },

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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.loadNpmTasks('grunt-pandoc');

    grunt.registerTask('default', ['markdownpdf']);
};
