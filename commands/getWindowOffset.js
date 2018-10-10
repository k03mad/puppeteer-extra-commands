/**
 * Get page window offset
 * @param {Object} page of puppeteer
 */
module.exports = page => page.evaluate(() => {
    return {x: window.pageXOffset, y: window.pageYOffset};
});
