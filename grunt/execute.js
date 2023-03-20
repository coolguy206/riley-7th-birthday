module.exports = function(grunt){
	return {
		target: {
            options: {
              args: ['arg1','arg2']
            },
            src: ['concat.js']
        }
  	}
};