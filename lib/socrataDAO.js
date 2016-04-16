'use strict';

var requestPromise = require('request-promise');
// var theRequest = require('request');
// var assert = require('assert');

module.exports = {
    getDatasetList: function (aUrl) {
        console.log(aUrl);
        var httpOptions = {
            url: aUrl,
            timeout: 100000,
            json: true
        };
        return requestPromise(httpOptions);
        // console.log(reqp);  
    }
};