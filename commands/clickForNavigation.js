/**
 * Click to element which loaded new page and wait for navigation
 * @param {Object} page of puppeteer
 * @param {string} selector of element
 * @param {Object} clickOptions pass options to page.click
 * @param {Object} waitOptions pass options to page.waitForNavigation
 * @returns {Promise}
 */
module.exports = (page, selector, clickOptions = {}, waitOptions = {}) => Promise.all([
    page.click(selector, clickOptions),
    page.waitForNavigation(waitOptions),
]);
