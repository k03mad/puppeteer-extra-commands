const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const saveScreenshot = require('../commands/saveScreenshot');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    default: {
        re: /\.\/screenshots\/\d{8}\/\d{8}_\d{6}.png/,
    },
    custom: {
        options: {date: 1, time: '2', folder: './screenshots/my/'},
        path: './screenshots/my/1/1_2.png',
    },
};

before(async () => {
    browser = await puppeteer.launch(options);
    [page] = await browser.pages();
});

describe(__filename, () => {

    it('Open test file', async () => {
        await openLocalHtmlTest(page);
    });

    it('Should save screenshot with default options', async () => {
        const path = await saveScreenshot(page);
        expect(path).to.match(data.default.re);
    });

    it('Should save screenshot with custom options', async () => {
        const path = await saveScreenshot(page, data.custom.options);
        expect(path).to.equal(data.custom.path);
    });

});

after(() => browser.close());
