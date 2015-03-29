var crypto = require('crypto');

var pass = process.argv[2];
var decryptStream = crypto.createDecipher('AES256', pass);

process.stdin.pipe(decryptStream).pipe(process.stdout);