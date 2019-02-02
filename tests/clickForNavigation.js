'use strict';

const clickForNavigation = require('../commands/clickForNavigation');
const getTextContent = require('../commands/getTextContent');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');
const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');

let browser, page;

const data = {
    link: '.link.second',
    frame: {
        selector: 'h1',
        text: ['Hello iframe'],
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

    it('Should open page from link', async () => {
        await clickForNavigation(page, data.link);
    });

    it('Should get text from new page', async () => {
        const text = await getTextContent(page, data.frame.selector);
        expect(text).to.eql(data.frame.text);
    });

});

after(() => browser.close());
