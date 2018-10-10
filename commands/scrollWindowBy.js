/**
 * Scroll page by px count
 * @param {Object} page of puppeteer
 * @param {Object} obj
 * @param {Number} obj.x px count for horizontal page scroll
 * @param {Number} obj.y px count for vertical page scroll
 */
module.exports = async (page, {x = 0, y = 0} = {}) => {
    await page.evaluate((scrollX, scrollY) => window.scrollBy(scrollX, scrollY), x, y);
};
