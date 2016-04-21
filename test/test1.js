'use strict';

var myidx = require('../lib/index.js');
var assert = require('assert');

/***/
var y = myidx.getSocrataList();
y.dsPromise.then(function (x1) {
    var resourceCnt = x1.dataset.length;
    console.log('success - ct datasets count:'+resourceCnt);
    assert(resourceCnt>300);
   // console.log(x1);
}).catch(function (e) {
    throw(e);
});
/****/

// run with domain parameter
var y1 = myidx.getSocrataList('data.seattle.gov');
y1.dsPromise.then(function (x1) {
    var resourceCnt = x1.dataset.length;
    console.log('success - seattle datasets count:'+resourceCnt);
    assert(resourceCnt>300);
    // console.log(x1);
}).catch(function (e) {
    throw(e);
});