/**
 * Get attribute of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector, attribute) => page.evaluate((sel, attr) => {

    const output = [];
    document.querySelectorAll(sel).forEach(elem => output.push(elem.getAttribute(attr)));
    return output;

}, selector, attribute);
