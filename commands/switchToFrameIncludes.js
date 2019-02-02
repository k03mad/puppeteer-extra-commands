'use strict';

const {timeouts} = require('./lib/const');

/**
 * Switch to iframe by its url or part of url
 * @param {Object} page of puppeteer
 * @param {Function} key from page frames
 * @param {string} search element
 * @param {number} timeout in ms for switch
 */
module.exports = async (page, key, search, timeout = timeouts.default) => {
    const startTime = Date.now();

    // wait for iframe with timeout
    // useful when iframe appears after click
    while (Date.now() - startTime < timeout) {
        // find iframe by url
        const frame = page.frames().find(f => f[key]().includes(search));

        if (frame) {
            return frame;
        }

        // wait within checks
        await page.waitFor(timeouts.short);
    }

    throw new Error(`waiting for frame contains ${key} "${search}" failed: timeout ${timeout}ms exceeded`);
};
