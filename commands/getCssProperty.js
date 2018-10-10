/**
 * Get css property of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector, property) => page.evaluate((sel, prop) => {

    const output = [];
    document.querySelectorAll(sel).forEach(elem => {
        output.push(window.getComputedStyle(elem).getPropertyValue(prop));
    });
    return output;

}, selector, property);
