'use strict';

/**
 * Scroll page by px count
 * @param {Object} page of puppeteer
 * @param {Object} obj px object
 * @param {number} obj.x px count for horizontal page scroll
 * @param {number} obj.y px count for vertical page scroll
 */
module.exports = (page, {x = 0, y = 0} = {}) => page.evaluate(
    (scrollX, scrollY) => window.scrollBy(scrollX, scrollY),
    x, y,
);
