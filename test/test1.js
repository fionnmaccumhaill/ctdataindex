'use strict';

var myidx = require('../lib/index.js');
var y = myidx.getSocrataList();
y.dsPromise.then(function (x1) {
    console.log(x1);
}).catch(function (e) {
    // console.log(e);
    throw(e);
});