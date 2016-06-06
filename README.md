# playlist-extractor
Extractor package to find files from playlist such as m3u and copy the files to a directory
## Installation
```bash
$ npm install playlist-extractor -g
```
## Usage
```bash
playlist-extractor -t path/to/playlist.m3u -o path/to/directory
```
## Documentation
**-t --target:** [String | Required]
File directory to playlist file

**-o --output** [String | Required]
Output directory folder to copy the files found from playlist

**-v --verbose** [Boolean]
Logs to the terminal the status of each step made

**-f --filter** [Array]
Filters the list of files found in the playlist, multiple values must be separated by spaces


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits
Oscar Reyes [Nosthertus]
## License
[MIT](https://github.com/Nosthertus/node-playlist-extractor/blob/master/LICENSE.md)