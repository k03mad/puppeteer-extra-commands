/**
 * Get css property of page element
 * @param {Object} page of puppeteer
 * @param {string} selector of element
 * @param {string} property of element
 * @returns {Promise}
 */
module.exports = (page, selector, property) => page.evaluate(
    (sel, prop) => [...document.querySelectorAll(sel)].map(elem => window.getComputedStyle(elem).getPropertyValue(prop)),
    selector, property
);
