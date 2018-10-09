/**
 * Scroll page by px count
 * @param {Object} page browser page
 * @param {Number} scroll px count for page scroll
 */
module.exports = (page, {x = 0, y = 0} = {}) => page.evaluate((scrollX, scrollY) => window.scrollBy(scrollX, scrollY), x, y);
