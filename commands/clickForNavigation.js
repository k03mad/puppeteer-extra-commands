/**
 * Click to element which loaded new page and wait for navigation
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 * @param {Object} clickOptions pass options to page.click
 * @param {Object} waitOptions pass options to page.waitForNavigation
 */
module.exports = (page, selector, clickOptions = {}, waitOptions = {}) => Promise.all([
    page.click(selector, clickOptions),
    page.waitForNavigation(waitOptions),
]);
