

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // 1. Вся настройка находится здесь

    grunt.initConfig({
        //libsass: {
           // src: 'scss/style.scss',
            //dist: 'css/style.css',
        //},

        sass: {
            options: {
                sourceMap: true,
                style: 'compressed'
            },
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss'
                },
            },
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
            css_lib: {
                files: ['scss/*.scss'],
                tasks: ['libsass'],
                options: {
                    spawn: false,
                },
            },
        },
    });
     
    grunt.registerTask('default', ['sass']);


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-libsass');

};