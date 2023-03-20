module.exports = {

  options: {
    livereload: true
  },


  css: {
    files: ['css/*.less'],
    tasks: ['less:css', 'cssmin:css'],
  },

  html: {
    files: ['*.html'],
    tasks: ['hello'],
  },

  js: {
    files: ['js/*.js'],
    tasks: ['hello'],
  },



};