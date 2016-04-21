'use strict';

var requestPromise = require('request-promise');

module.exports = {
    getDatasetList: function (aUrl) {
        var httpOptions = {
            url: aUrl,
            timeout: 100000,
            json: true
        };
        var rp = requestPromise(httpOptions);
        return rp;
    }
};