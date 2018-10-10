const {timeouts} = require('./lib/const');

/**
 * Get attribute of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 * @param {Number} timeout in ms for element wait
 */
module.exports = async (page, selector, attribute, timeout = timeouts.default) => {
    await page.waitFor(selector, {timeout});
    return page.evaluate((sel, attr) => {
        const output = [];
        document.querySelectorAll(sel).forEach(elem => output.push(elem.getAttribute(attr)));
        return output;
    }, selector, attribute);
};
