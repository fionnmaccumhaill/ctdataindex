# ctdataindex
A simple node.js repository for retrieving the list of CT Open Datasets from Socrata.

Usage:

var myidx = require('./lib/index.js');  
var y = myidx.getSocrataList(); // returns an Object containing a Promise  
var dsListPromise = y.dsPromise; // get the Promise from the Object  
dsListPromise.then(function (theList) {  
    process(theList);  
}).catch(function(listError) {  
    processError(listError);  
});  

If you aren't familiar with Promises please check out these links:
- https://www.npmjs.com/package/promise
- http://stackoverflow.com/questions/4296505/understanding-promises-in-node-js?rq=1
- http://www.2ality.com/2014/10/es6-promises-api.html