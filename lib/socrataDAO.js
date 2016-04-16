'use strict';

var requestPromise = require('request-promise');

module.exports = {
    getDatasetList: function (aUrl) {
        console.log(aUrl);
        var httpOptions = {
            url: aUrl,
            timeout: 100000,
            json: true
        };
        var rp = requestPromise(httpOptions);
        console.log('after requestPromie');
        return rp;
        // return requestPromise(httpOptions); 
    }
};