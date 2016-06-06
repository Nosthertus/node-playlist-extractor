var flutils = require("flutils");
var path    = require("path");
var fs      = require("fs");
var utils   = require("utils-pkg");
var argv    = require("./argvs.js");

/**
 * All valid extensions files
 * 
 * @type {Array}
 */
module.exports.VALID_FILE_EXTENSIONS = ["mp3", "ogg", "mp4"];

/**
 * All valid extension playlist files
 * 
 * @type {Array}
 */
module.exports.VALID_PLAYLIST_EXTENSIONS = ["m3u"];

/**
 * Check if the requested file exists
 * 
 * @param  {String}  dir The directory of the file
 * @return {Boolean}     Whever exists or not
 */
module.exports.fileExists = function(dir){
	return flutils.dirExists(dir);
}

/**
 * Extract the file directories from the valid playlist
 * 
 * @param  {String} dir Directory of the playlist file
 * @return {Array}      List of the files extracted from the playlist
 */
module.exports.extract = function(dir){
	var ext = this.getExtension(dir);

	var driver = this.loadDriver(ext);

	var file = fs.readFileSync(dir, "utf-8");

	var list = this.filter(driver.extract(file));

	return list;
};

/**
 * Get the extension playlist to check if is valid
 * 
 * @param  {String} dir Directory of the playlist file
 * @return {String}     Extension file of the directory
 */
module.exports.getExtension = function(dir){
	return path.parse(dir).ext.split(".")[1];
}

/**
 * Check if the given extension is valid
 * 
 * @param  {string}  ext Extension of the playlist file
 * @return {Boolean}     Whether the extension is found in the list of valid files
 */
module.exports.isValidPlaylist = function(ext){
	return this.VALID_PLAYLIST_EXTENSIONS.indexOf(ext) > -1;
}

/**
 * Load the driver if the playlist is valid, throws error if is not found as valid
 * 
 * @param  {String} ext Extension of the playlist file
 * @return {Object}     The object of the driver if found
 */
module.exports.loadDriver = function(ext){
	if(this.isValidPlaylist(ext)){
		return require("./drivers/" + ext + ".js");
	}

	else{
		throw new Error("Driver " + ext + " is not supported.");
	}
}

/**
 * Filter file type with the given list from argv.f
 * 
 * @param  {Array}  arr The array list to filter
 * @return {Array}      New array list filtered
 */
module.exports.filter = function(arr){
	if(argv.f){
		return arr.filter(function(dir){
			var ext = path.parse(dir).ext.split(".")[1];

			return utils.inArray(argv.f, ext);
		});
	}

	return arr;
}