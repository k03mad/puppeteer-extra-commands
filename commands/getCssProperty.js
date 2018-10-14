/**
 * Get css property of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector, property) => page.evaluate((sel, prop) => {
    return [...document.querySelectorAll(sel)].map(elem => window.getComputedStyle(elem).getPropertyValue(prop));
}, selector, property);
