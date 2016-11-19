module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['dist'],

    ts: {
      base: {
        src: ['app/**/*.ts', 'spec/*.ts'],
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

    tslint: {
      options: {
          // can be a configuration object or a filepath to tslint.json
        configuration: "tslint.json",
        // If set to true, tslint errors will be reported, but not fail the task
        // If set to false, tslint errors will be reported, and the task will fail
        force: false
      },
      files: {
        src: ['app/**/*.ts']
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
    concurrent: {
      dev: {
        tasks: ['nodemon', 'karma', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    nodemon: {
      dev: {
        script: 'server/app.js'
      }
    },

    watch: {
      ts: {
        files: ['app/**/*.ts', 'spec/*.ts'],
        tasks: ['ts']
      },
      copy: {
        files: ['app/**/*.css', 'app/**/*.html'],
        tasks: ['copy:css', 'copy:html']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        autoWatch: true
      }
    },

  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('build', ['clean', 'tslint', 'ts','copy:css', 'copy:html']);
  grunt.registerTask('default', ['build', 'concurrent']);
};