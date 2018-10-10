const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const getInnerText = require('../commands/getInnerText');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, page;

const data = {
    one: {
        selector: 'h1',
        text: ['Hello world'],
    },
    few: {
        selector: '.block',
        text: ['block1', 'block2'],
    },
    missing: {
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

    it('Should get text from selector with one match', async () => {
        const text = await getInnerText(page, data.one.selector);
        expect(text).to.eql(data.one.text);
    });

    it('Should get text from selector with few matches', async () => {
        const text = await getInnerText(page, data.few.selector);
        expect(text).to.eql(data.few.text);
    });

    it('Should not get text from missing selector', async () => {
        try {
            await getInnerText(page, data.missing.selector);
            throw new Error(data.missing.exception);
        } catch (err) {
            expect(err.message).to.equal(data.missing.error);
        }
    });

});

after(() => browser.close());
