const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const getAttribute = require('../commands/getAttribute');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    one: {
        attribute: 'href',
        selector: '.link.second',
        text: ['iframe.html'],
    },
    few: {
        attribute: 'href',
        selector: '.link',
        text: ['https://ya.ru', 'iframe.html'],
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

    it('Should get attribute from selector with one match', async () => {
        const text = await getAttribute(page, data.one.selector, data.one.attribute);
        expect(text).to.eql(data.one.text);
    });

    it('Should get attribute from selector with few matches', async () => {
        const text = await getAttribute(page, data.few.selector, data.few.attribute);
        expect(text).to.eql(data.few.text);
    });

});

after(() => browser.close());
