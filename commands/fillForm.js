'use strict';

const {array} = require('utils-mad');
const {timeouts} = require('./lib/const');

/**
 * Fill form with data
 * @param {Object} page of puppeteer
 * @param {Object|Object[]} data to fill
 * @param {string} data[].field of element fill
 * @param {string} data[].text to fill
 * @param {string} data[].click button to click
 * @param {Object} waitOptions pass options to page.waiFor
 * @param {Object} clickOptions pass options to page.click
 * @param {Object} typeOptions pass options to page.type
 * @returns {Promise}
 */
module.exports = async (page, data, waitOptions = {visible: true, timeout: timeouts.default}, clickOptions = {}, typeOptions = {}) => {
    for (const elem of array.convert(data)) {
        if (elem.field) {
            await page.waitFor(elem.field, waitOptions);
            await page.click(elem.field, clickOptions);
            await page.type(elem.field, elem.text, typeOptions);
        }

        if (elem.click) {
            await page.waitFor(elem.click, waitOptions);
            await page.click(elem.click, clickOptions);
        }
    }
};
