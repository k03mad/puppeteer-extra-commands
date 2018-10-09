/**
 * Get page window offset
 * @param {Object} page browser page
 */
module.exports = page => page.evaluate(() => {
    return {x: window.pageXOffset, y: window.pageYOffset};
});
