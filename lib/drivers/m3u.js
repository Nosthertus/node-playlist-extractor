/**
 * Driver for M3U file
 */

/**
 * Regular expression for extraction
 * 
 * @type {RegExp}
 */
module.exports.REGEX = /^\/.*$/gm;

/**
 * Extract all files from the m3u playlist file
 * 
 * @param  {String} str String content of the playlist file
 * @return {Array}      List of files that matches the regular expression
 */
module.exports.extract = function(str){
	return str.match(this.REGEX);
};