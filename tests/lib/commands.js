'use strict';

const path = require('path');

module.exports = {

    /**
     * Open local index.html file for tests
     * @param {object} page of puppeteer
     * @returns {Promise}
     */
    openLocalHtmlTest: page => page.goto(`file:///${path.join(__dirname, '..', 'www', 'index.html')}`),

};
