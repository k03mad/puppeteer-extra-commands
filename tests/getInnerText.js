const {expect} = require('chai');
const getInnerText = require('../commands/getInnerText');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    url: 'http://example.com',
    selector: 'h1',
    text: 'Example Domain',
};

before(async () => {
    browser = await puppeteer.launch(options);
    [page] = await browser.pages();
});

describe(__filename, () => {

    it(`Open ${data.url}`, async () => {
        await page.goto(data.url);
    });

    it(`'${data.selector}' should have inner text '${data.text}'`, async () => {
        const [text] = await getInnerText(page, data.selector);
        expect(text).to.equal(data.text);
    });

});

after(() => browser.close());
