'use strict';

const mkdirp = require('mkdirp');
const {date} = require('utils-mad');

/**
 * Save screenshot to folder with current date
 * @param {object} page of puppeteer
 * @param {object} options pass options to page.screenshot
 * @returns {string}
 */
module.exports = async (page, options = {}) => {
    if (!options.path) {
        const day = date.now('YYYYMMDD');
        const time = date.now('HHmmss');

        const folder = `./screenshots/${day}`;
        await mkdirp(folder);

        // ./screenshots/20181011/20181011_005412.png
        options.path = `${folder}/${day}_${time}.png`;
    }

    await page.screenshot(options);
    return options.path;
};
