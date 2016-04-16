'use strict';

var ctidx = require('./ctdataindex.js');

module.exports = {
    getSocrataList: function() {
        return ctidx.getDSList();
    }
}