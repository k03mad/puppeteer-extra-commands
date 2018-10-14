/**
 * Get text content of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector) => page.evaluate(sel => {
    return [...document.querySelectorAll(sel)].map(elem => elem.textContent);
}, selector);
