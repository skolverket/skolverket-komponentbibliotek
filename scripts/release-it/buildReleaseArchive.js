#! /usr/bin/env node

const fs = require('fs');
const archiver = require('archiver');
const pkg = require('../../package.json');

var output = fs.createWriteStream(`skolverket-bundle-${pkg.version}.zip`);
var archive = archiver('zip');

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log(
    'archiver has been finalized and the output file descriptor has closed.'
  );
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

archive.directory('./build/dist/', false);

archive.finalize();
