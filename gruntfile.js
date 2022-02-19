const imagePng = require('imagemin-pngquant');
const imageJpeg = require('imagemin-mozjpeg');
const imageGif = require('imagemin-giflossy');
const sass = require('sass');

module.exports = function (grunt) {
  grunt.initConfig({

    // sass is a preprocessor for css
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: './src/scss/5-pages/',
            src: ['*.scss'],
            dest: './src/css/',
            ext: '.css',
          },
        ],
      },
    },

    // eslint for clean code and error find in js files
    eslint: {
      options: {
        overrideConfigFile: '.eslintrc.json',
        // fix: true,   // optional
      },
      target: ['./src/javascript/index.js'],
    },

    // cssmin for css minification
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './src/css/',
          src: ['*.css', '!*.css.map'],
          dest: './build/css',
          ext: '.min.css',
        }],
      },
    },

    // imagemin for your jpg, png, gif for can be compressed into small size
    imagemin: {
      options: {
        use: [
          imagePng({ quality: [0.1, 0.1] }), // you can feel free to change it
          imageJpeg({ quality: 50 }),
          imageGif({ lossy: 50 }),
        ],
      },
      dynamic: {
        files: [{
          cwd: './build/Assets/',
          expand: true,
          src: ['*.{ png, jpg, gif }'],
          dest: './build/Assets',
        }],
      },
    },

    // ========== this packages are optional
    // concat
    // concat: {
    //  options: {
    //   separator: ';',
    //  },
    //  dist: {
    //   src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
    //   dest: 'dist/built.js',
    //  },
    //   },

    // copy
    // copy: {
    //  main: {
    //   expand: true,
    //   cwd: 'src/',
    //   src: '**',
    //   dest: 'dest/',
    //   flatten: true,
    //   filter: 'isFile',
    //  },
    // },

    // watch
    watch: {
      sass: {
        files: ['./src/scss/5-pages/*.scss'],
        tasks: ['sass'],
      },
      eslint: {
        files: ['!node_modules/**/*.js', '**/*.js'],
        tasks: ['eslint'],
      },
      cssmin: {
        files: ['./src/css/*.css', '!.min.css'],
        tasks: ['cssmin'],
      },
      imagemin: {
        files: ['./build/Assets/*.{ png, jpg, gif }'],
        tasks: ['imagemin'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // this methods for your choice
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-copy');

  // watch
  grunt.loadNpmTasks('grunt-contrib-watch');
};
