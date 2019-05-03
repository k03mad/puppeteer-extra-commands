'use strict';

/**
 * Get attribute of page element
 * @param {Object} page of puppeteer
 * @param {string} selector of element
 * @param {string} attribute of element
 * @returns {Promise}
 */
module.exports = (page, selector, attribute) => page.evaluate(
    (sel, attr) => [...document.querySelectorAll(sel)].map(elem => elem.getAttribute(attr)),
    selector, attribute,
);
