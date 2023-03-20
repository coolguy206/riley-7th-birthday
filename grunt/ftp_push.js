/*
require('dotenv').config()
var baseURL = `media/tea_collection/`;

module.exports = {
  hpCSS: {
    options: {
      host: process.env.FTP_HOST,
      username: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      dest: `${baseURL}${config.hp.ftp.css.dest}`,
      incrementalUpdates: false
    },
    files: [{
      expand: true,
      cwd: 'homepage/default/css/',
      src: [
        "*.css",
      ]
    }]
  },

};
*/