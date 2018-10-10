/**
 * Scroll page by px count
 * @param {Object} page of puppeteer
 * @param {Object} obj
 * @param {Number} obj.x px count for horizontal page scroll
 * @param {Number} obj.y px count for vertical page scroll
 */
module.exports = (page, {x = 0, y = 0} = {}) => page.evaluate((scrollX, scrollY) => {
    return window.scrollBy(scrollX, scrollY);
}, x, y);
