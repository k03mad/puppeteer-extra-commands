/**
 * Get attribute of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector, attribute) => page.evaluate((sel, attr) => {
    return [...document.querySelectorAll(sel)].map(elem => elem.getAttribute(attr));
}, selector, attribute);
