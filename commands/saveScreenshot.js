'use strict';

const mkdirp = require('mkdirp');
const moment = require('moment');

/**
 * Save screenshot to folder with current date
 * @param {Object} page of puppeteer
 * @param {Object} options pass options to page.screenshot
 */
module.exports = async (page, options = {}) => {
    if (!options.path) {
        const date = moment().format('YYYYMMDD');
        const time = moment().format('HHmmss');

        const folder = `./screenshots/${date}`;
        await mkdirp(folder);

        // ./screenshots/20181011/20181011_005412.png
        options.path = `${folder}/${date}_${time}.png`;
    }

    await page.screenshot(options);
    return options.path;
};
