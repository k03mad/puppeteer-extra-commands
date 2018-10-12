/**
 * Click to element which loaded new page and wait for navigation
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector) => Promise.all([
    page.click(selector),
    page.waitForNavigation(),
]);
