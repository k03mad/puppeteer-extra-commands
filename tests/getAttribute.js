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
        text: ['https://ya.ru'],
    },
    few: {
        attribute: 'href',
        selector: '.link',
        text: ['https://ya.ru', 'https://ya.ru'],
    },
    missing: {
        attribute: 'href',
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

    it('Should get attribute from selector with one match', async () => {
        const text = await getAttribute(page, data.one.selector, data.one.attribute);
        expect(text).to.eql(data.one.text);
    });

    it('Should get attribute from selector with few matches', async () => {
        const text = await getAttribute(page, data.few.selector, data.few.attribute);
        expect(text).to.eql(data.few.text);
    });

    it('Should not get attribute from missing selector', async () => {
        try {
            await getAttribute(page, data.missing.selector, data.missing.attribute);
            throw new Error(data.missing.exception);
        } catch (err) {
            expect(err.message).to.equal(data.missing.error);
        }
    });

});

after(() => browser.close());
