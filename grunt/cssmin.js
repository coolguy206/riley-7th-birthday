module.exports = {

  options: {
    //sourceMap:true,
  },

  css: {
    files: [{
      expand: true,
      cwd: 'css/',
      src: '*.css',
      dest: 'css/cssmin/',
      ext: '.min.css'
    }]
  },

};