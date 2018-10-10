const path = require('path');

module.exports = {

    /**
     * Open local index.html file for tests
     * @param {Object} page of puppeteer
     */
    openLocalHtmlTest: page => page.goto(`file:///${path.join(__dirname, '..', 'www', 'index.html')}`),

};