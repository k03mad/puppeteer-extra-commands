const mkdirp = require('mkdirp');
const moment = require('moment');

/**
 * Save screenshot to folder with current date
 * @param {Object} page of puppeteer
 * @param {Object} options
 * @param {Object} options.date for folder and file name
 * @param {Object} options.time for file name
 * @param {Object} options.folder to save screenshot
 */
module.exports = async (page, {
    date = moment().format('YYYYMMDD'),
    time = moment().format('HHmmss'),
    folder = './screenshots/',
} = {}) => {
    const subfolder = folder + date;
    await mkdirp(subfolder);

    const path = `${subfolder}/${date}_${time}.png`;
    await page.screenshot({path});

    return path;
};
