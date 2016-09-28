module.exports = function(grunt) {

  grunt.initConfig({

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: ['server/server.js', 'REPL_service/REPL_server.js']
      }
    },
    

    eslint: {
      target: [
        'server/*.js',
        'server/**/*.js'
      ]
    },

    // cssmin: {
    // },

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');


  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('start', [
    'nodemon'
  ]);

  grunt.registerTask('build', [
    'cssmin'
  ]);

};