'use strict';

/**
 * Get text content of page element
 * @param {Object} page of puppeteer
 * @param {string} selector of element
 * @returns {Promise}
 */
module.exports = (page, selector) => page.evaluate(
    sel => [...document.querySelectorAll(sel)].map(elem => elem.textContent.trim()),
    selector
);
