'use strict';

var SocrataDAO = require('./socrataDAO');

/** v1.1 dcat json file for CT. 
 *  See https://project-open-data.cio.gov/v1.1/schema/ for the schema
 * @type {string}
 */
var ctDomain = 'https://data.ct.gov/data.json';

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
 * A mutator function used to store the promise on a CTDataIndex instance.
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
