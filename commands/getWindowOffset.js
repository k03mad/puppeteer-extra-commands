'use strict';

/**
 * Get page window offset
 * @param {Object} page of puppeteer
 * @returns {Promise}
 */
module.exports = page => page.evaluate(() => ({x: window.pageXOffset, y: window.pageYOffset}));
