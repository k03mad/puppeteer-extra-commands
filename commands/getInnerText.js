/**
 * Get inner text of page element
 * @param {Object} page of puppeteer
 * @param {String} selector of element
 */
module.exports = (page, selector) => page.evaluate(sel => {

    const output = [];
    document.querySelectorAll(sel).forEach(elem => output.push(elem.textContent));
    return output;

}, selector);
