module.exports = function(grunt) {

  var WEBSERVER_PORT = 8111;
  var LIVERELOAD_PORT = 12022;

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '// <%= pkg.name %> - v<%= pkg.version %>\n' +
        '//\n' +
        '// <%= pkg.homepage %>\n' +
        '//\n' +
        '// <%= pkg.description %>\n' +
        '//\n' +
        '// Copyright (c)<%= grunt.template.today("yyyy") %> - <%= pkg.author %>\n' +
        '//\n' +
        '// Distributed under <%= pkg.license %> license\n' +
        '//\n' +
        '\n'
    },

    jsbeautifier: {
      options: {
        js: {
          braceStyle: 'end-expand',
          indentSize: 2,
          keepArrayIndentation: true,
          maxPreserveNewlines: 10,
          preserveNewlines: true
        }
      },

      src: {
        src: ['jquery.togglebutton.js']
      },

      extras: {
        src: [
          'Gruntfile.js'
        ]
      }
    },

    connect: {
      options: {
        livereload: LIVERELOAD_PORT
      },

      example: {
        options: {
          port: WEBSERVER_PORT,
          open: 'http://localhost:' + WEBSERVER_PORT + '/example.html'
        }
      }
    },

    exec: {
      fixjsstyle: {
        command: 'fixjsstyle Gruntfile.js && fixjsstyle -r src/ && fixjsstyle -r spec/'
      }
    },

    watch: {

      options: {
        // spawn: true,
        interval: 500,
        forever: true,
        debounceDelay: 1000,
        livereload: LIVERELOAD_PORT
      },

      src: {
        files: [
          'jquery.togglebutton.js',
          'example.html'
        ],
        tasks: [
          'lint',
          'build'
        ]
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      prod: {
        mangle: {
          except: ['$.fn.toggleButton']
        },
        src: 'jquery.togglebutton.js',
        dest: 'jquery.togglebutton.min.js'
      }
    }
  });

  grunt.registerTask('lint', [
    'jsbeautifier',
    'exec:fixjsstyle'
  ]);

  grunt.registerTask('build', ['uglify']);

  grunt.registerTask('default', [
    'lint',
    'build',
    'connect',
    'watch'
  ]);
};
