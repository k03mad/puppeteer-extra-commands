/**
 * Scroll page by px count
 * @param {Object} page of puppeteer
 * @param {Number{}} x,y px count for page scroll
 */
module.exports = (page, {x = 0, y = 0} = {}) => page.evaluate((scrollX, scrollY) => window.scrollBy(scrollX, scrollY), x, y);
