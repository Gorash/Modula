if (typeof exports === 'undefined') {
    var scripts = document.getElementsByTagName('script');
    var path = scripts[scripts.length - 1].src.split('?')[0];
    var dir = path.replace(/[^\/]+$/, '');

    var load =[
        dir + 'src/V2.js',
        dir + 'src/V3.js',
        dir + 'src/Rect.js',
        dir + 'src/Mat3.js',
        dir + 'src/Transform2.js',
        dir + 'src/Mat4.js',
        dir + 'src/Quat.js',
        dir + 'src/Grid2.js'];
    for ( var i = 0 ; i < load.length ; i++ ) {
        document.write('<script type="text/javascript" src="' + load[i] + '"></script>');
    }
} else {
    exports.V2 = require('./src/V2').V2;
    exports.V3 = require('./src/V3').V3;
    exports.Rect = require('./src/Rect').Rect;
    exports.Mat3 = require('./src/Mat3').Mat3;
    exports.Transform2 = require('./src/Transform2').Transform2;
    exports.Mat4 = require('./src/Mat4').Mat4;
    exports.Quat = require('./src/Quat').Quat;
    exports.Grid2 = require('./src/Grid2').Grid2;
}