const {timeouts} = require('./lib/const');

/**
 * Switch to iframe by its name
 * @param {Object} page of puppeteer
 * @param {String} name of iframe
 * @param {Number} timeout in ms for switch
 */
module.exports = async (page, name, timeout = timeouts.default) => {
    const startTime = Date.now();

    // wait for iframe display with timeout
    // useful when iframe appears after click
    while (Date.now() - startTime < timeout) {
        // find iframe by name
        const frame = page.frames().find(f => f.name() === name);

        if (frame) {
            return frame;
        }

        // wait within checks
        await page.waitFor(timeouts.short);
    }

    throw new Error(`waiting for frame "${name}" failed: timeout ${timeout}ms exceeded`);
};
