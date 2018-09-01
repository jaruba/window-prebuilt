var path = require('path')
var fs = require('fs')
var child = require('child_process')

var back = '../..';
var binDir = path.resolve(__dirname, back, 'bin');

// in case of asar, go one level down
while (binDir.includes('/app.asar/') || binDir.includes('\\app.asar\\')) {
    back += '/..'
    binDir = path.resolve(__dirname, back, 'bin');
}

// for safety
if (!fs.existsSync(binDir)) {
  back += '/..'
  binDir = path.resolve(__dirname, back, 'bin');
}

var windowExec = path.join(binDir, 'window')

if (fs.existsSync(path.join(windowExec, 'window.exe')))
  windowExec = path.join(windowExec, 'window.exe')

module.exports = function(type) {
  child.exec('"' + windowExec + '" /HIDE ' + type);
}
