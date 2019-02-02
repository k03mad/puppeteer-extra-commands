'use strict';

/**
 * Click to element which loaded new page and wait for navigation
 * @param {Object} page of puppeteer
 * @param {string} selector of element
 * @param {Object} waitOptions pass options to page.waitForNavigation
 * @param {Object} clickOptions pass options to page.click
 * @returns {Promise}
 */
module.exports = (page, selector, waitOptions = {}, clickOptions = {}) => Promise.all([
    page.click(selector, clickOptions),
    page.waitForNavigation(waitOptions),
]);
