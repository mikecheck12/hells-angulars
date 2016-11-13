module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['dist'],

    ts: {
      base: {
        src: ['app/**/*.ts'],
        dest: 'dist',
        options: {
          "target": "es5",
          "module": "commonjs",
          "moduleResolution": "node",
          "sourceMap": true,
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "removeComments": false,
          "noImplicitAny": false
        }
      }
    },

    copy: {
      css: {
        expand: true,
        cwd:'app',
        src: ['**/*.css'],
        dest: 'dist/',
      },
      html: {
        expand: true,
        cwd:'app',
        src: ['**/*.html'],
        dest: 'dist/',
      }
    },

    watch: {
      ts: {
        files: ['app/**/*.ts'],
        tasks: ['ts']
      },
      copy: {
        files: ['app/**/*.css', 'app/**/*.html'],
        tasks: ['copy:css', 'copy:html']
      }
    },


  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean', 'ts', 'copy:css', 'copy:html'])
  grunt.registerTask('default', ['build', 'watch']);
};