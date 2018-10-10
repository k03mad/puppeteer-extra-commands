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
    missing: {
        property: 'border',
        selector: '.nosuchselector',
        exception: 'should have timeout error with missing selector',
        error: 'waiting for selector ".nosuchselector" failed: timeout 5000ms exceeded',
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

    it('Should not get css property from missing selector', async () => {
        try {
            await getCssProperty(page, data.missing.selector, data.missing.property);
            throw new Error(data.missing.exception);
        } catch (err) {
            expect(err.message).to.equal(data.missing.error);
        }
    });

});

after(() => browser.close());
