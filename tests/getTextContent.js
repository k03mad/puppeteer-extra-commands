const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const getTextContent = require('../commands/getTextContent');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    one: {
        selector: '.link.second',
        text: ['link2'],
    },
    few: {
        selector: '.link',
        text: ['link1', 'link2'],
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

    it('Should get text from selector with one match', async () => {
        const text = await getTextContent(page, data.one.selector);
        expect(text).to.eql(data.one.text);
    });

    it('Should get text from selector with few matches', async () => {
        const text = await getTextContent(page, data.few.selector);
        expect(text).to.eql(data.few.text);
    });

});

after(() => browser.close());
