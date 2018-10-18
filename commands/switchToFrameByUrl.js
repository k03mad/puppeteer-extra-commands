const {timeouts} = require('./lib/const');

/**
 * Switch to iframe by its url or part of url
 * @param {Object} page of puppeteer
 * @param {String} url or its part which iframe contains
 * @param {Number} timeout in ms for switch
 */
module.exports = async (page, url, timeout = timeouts.default) => {
    const startTime = Date.now();

    // wait for iframe with timeout
    // useful when iframe appears after click
    while (Date.now() - startTime < timeout) {
        // find iframe by url
        const frame = page.frames().find(f => f.url().includes(url));

        if (frame) {
            return frame;
        }

        // wait within checks
        await page.waitFor(timeouts.short);
    }

    throw new Error(`waiting for frame contains url "${url}" failed: timeout ${timeout}ms exceeded`);
};
