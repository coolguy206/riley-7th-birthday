module.exports = {

  options: {
    sourceMap: true,
    presets: ['@babel/preset-env']
  },

  js: {
    files: [{
      expand: true,
      cwd: 'js/jsmin/',
      src: '*.js',
      dest: 'js/babel/'
    }]
  },

};