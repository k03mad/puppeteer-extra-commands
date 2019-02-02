'use strict';

const getWindowOffset = require('../commands/getWindowOffset');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');
const scrollWindowBy = require('../commands/scrollWindowBy');
const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');

let browser, page;

before(async () => {
    browser = await puppeteer.launch(options);
    [page] = await browser.pages();
});

describe(__filename, () => {

    it('Open test page', async () => {
        await openLocalHtmlTest(page);
    });

    it('Should have zeros in window offset by default', async () => {
        const offset = await getWindowOffset(page);
        expect(offset).to.deep.equal({x: 0, y: 0});
    });

    it('Should have correct window offset after scroll by x and y', async () => {
        await scrollWindowBy(page, {x: 0, y: 500});

        const offset = await getWindowOffset(page);
        expect(offset).to.deep.equal({x: 0, y: 500});
    });

    it('Should have correct window offset after scroll by y only', async () => {
        await scrollWindowBy(page, {y: 1000});

        const offset = await getWindowOffset(page);
        expect(offset).to.deep.equal({x: 0, y: 1500});
    });

    it('Should have correct window offset after negative scroll', async () => {
        await scrollWindowBy(page, {x: 0, y: -1500});

        const offset = await getWindowOffset(page);
        expect(offset).to.deep.equal({x: 0, y: 0});
    });

});

after(() => browser.close());
