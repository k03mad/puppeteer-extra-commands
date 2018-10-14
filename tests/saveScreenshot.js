const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const saveScreenshot = require('../commands/saveScreenshot');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    pathRe: /\.\/screenshots\/\d{8}\/\d{8}_\d{6}.png/,
};

before(async () => {
    browser = await puppeteer.launch(options);
    [page] = await browser.pages();
});

describe(__filename, () => {

    it('Open test file', async () => {
        await openLocalHtmlTest(page);
    });

    it('Should save screenshot', async () => {
        const path = await saveScreenshot(page);
        expect(path).to.match(data.pathRe);
    });

});

after(() => browser.close());
