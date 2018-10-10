const {timeouts} = require('./lib/const');

/**
 * Get inner text of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 * @param {Number} timeout in ms for element wait
 */
module.exports = async (page, selector, timeout = timeouts.default) => {
    await page.waitFor(selector, {timeout});
    return page.evaluate(sel => {
        const output = [];
        document.querySelectorAll(sel).forEach(elem => output.push(elem.textContent));
        return output;
    }, selector);
};
