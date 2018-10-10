const {timeouts} = require('./lib/const');

/**
 * Get css property of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 * @param {Number} timeout in ms for element wait
 */
module.exports = async (page, selector, property, timeout = timeouts.default) => {
    await page.waitFor(selector, {timeout});
    return page.evaluate((sel, prop) => {
        const output = [];
        document.querySelectorAll(sel).forEach(elem => {
            output.push(window.getComputedStyle(elem).getPropertyValue(prop));
        });
        return output;
    }, selector, property);
};
