var fs   = require("fs"),
	argv = require("./argvs.js");

/**
 * Copy files to a directory
 * 
 * @param  {String}   from Source directory file to copy
 * @param  {String}   to   Output directory where to copy
 * @param  {Function} cb   Function when copying is done
 */
module.exports.copy = function(from, to, cb){
	fs.createReadStream(from)
		.on("open", function(){
			if(argv.v){
				console.log("copying file:", from);
			}
		})
		.pipe(fs.createWriteStream(to)
			.on("close", function(){
				if(cb){
					cb();
				}
			})
		)
}