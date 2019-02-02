'use strict';

const {timeouts} = require('./lib/const');

/**
 * Fill form with data
 * @param {Object} page of puppeteer
 * @param {Object[]} data to fill
 * @param {string} data[].selector of element fill
 * @param {string} data[].text to type
 * @param {Object} waitOptions pass options to page.waiFor
 * @param {Object} clickOptions pass options to page.click
 * @param {Object} typeOptions pass options to page.type
 * @returns {Promise}
 */
module.exports = async (page, data, waitOptions = {visible: true, timeout: timeouts.default}, clickOptions = {}, typeOptions = {}) => {
    for (const elem of data) {
        await page.waitFor(elem.selector, waitOptions);
        await page.click(elem.selector, clickOptions);
        await page.type(elem.selector, elem.text, typeOptions);
    }
};
