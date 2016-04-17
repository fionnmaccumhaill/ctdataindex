'use strict';

var myidx = require('../lib/index.js');
var y = myidx.getSocrataList();
y.dsPromise.then(function (x1) {
    var resourceCnt = x1.dataset.length;
    console.log('resources:'+resourceCnt);
}).catch(function (e) {
    throw(e);
});