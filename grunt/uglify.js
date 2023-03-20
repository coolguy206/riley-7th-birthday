module.exports = {

  options: {
    compress: true,
    sourceMap: true
  },

  js: {
    expand: true,
    cwd: 'js/',
    src: ['*.js'],
    dest: 'js/jsmin/',
    ext: '.min.js',
  },

};