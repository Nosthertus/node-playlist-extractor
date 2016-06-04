var yargs = require("yargs");

module.exports = yargs
	.example("Usage: $0 -t path/to/playlist.m3u -o path/to/save")
	.options({
		't': {
			alias: 'target',
			demand: true,
			describe: 'playlist file directory',
			type: 'string'
		},
		'o': {
			alias: 'output',
			demand: true,
			describe: 'output directory to copy files from playlist',
			type: 'string'
		},
		'f': {
			alias: 'filter',
			demand: false,
			describe: "filter type of files to extract",
			type: "array"
		},
		'v': {
			alias: 'verbose',
			demand: false,
			describe: "show logs to the console",
			type: "boolean"
		}
	})
	.argv;