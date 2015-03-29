var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var cipher = process.argv[2];
var pass = process.argv[3];
var decryptStream = crypto.createDecipher(cipher, pass);

var unzipStream = zlib.createGunzip();

var tarParser = tar.Parse();
tarParser.on('entry', function (e) {
	if (e.type !== 'File') return;

	var hashStream = crypto.createHash('md5', { encoding: 'hex' });
	hashStream.pipe(concat(function (buffer) {
		process.stdout.write(buffer.toString() + ' ' + e.props.path + '\n');
	}));

	e.pipe(hashStream);
});

process.stdin.pipe(decryptStream).pipe(unzipStream).pipe(tarParser);
