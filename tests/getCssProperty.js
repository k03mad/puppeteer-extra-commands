const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const getCssProperty = require('../commands/getCssProperty');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    one: {
        property: 'border',
        selector: '.link.second',
        text: ['3px solid rgb(0, 0, 238)'],
    },
    few: {
        property: 'border',
        selector: '.link',
        text: ['0px none rgb(0, 0, 238)', '3px solid rgb(0, 0, 238)'],
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

    it('Should get css property from selector with one match', async () => {
        const text = await getCssProperty(page, data.one.selector, data.one.property);
        expect(text).to.eql(data.one.text);
    });

    it('Should get css property from selector with few matches', async () => {
        const text = await getCssProperty(page, data.few.selector, data.few.property);
        expect(text).to.eql(data.few.text);
    });

});

after(() => browser.close());
