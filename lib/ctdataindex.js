'use strict';

var SocrataDAO = require('./socrataDAO');
var ctDomain = 'https://data.ct.gov/api/catalog/v1';

/** CTDataIndex - a class used to hold the request-promise output.
 * @name CTDataIndex
 * @constructor
*/
function CTDataIndex() {
    /**
     *  Socrata domain to search
     *  @type {string}
     */
    this.domain = ctDomain;
}

/**
 * A function used to store the promise on a CTDataIndex instance.
 * @param {Promise} aPromise - contains a list of datasets in the domain
 * @return 
 */
CTDataIndex.prototype.setPromise = function(aPromise) {
    this.dsPromise = aPromise;
}

module.exports = {
    getDSList: function () { 
        var cti = new CTDataIndex();
        var socrataList = SocrataDAO.getDatasetList(ctDomain);
        cti.setPromise(socrataList);
        return cti;  
    }
};
