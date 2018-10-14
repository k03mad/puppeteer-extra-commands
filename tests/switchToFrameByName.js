const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const switchToFrameByName = require('../commands/switchToFrameByName');
const getTextContent = require('../commands/getTextContent');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, frame, page;

const data = {
    name: 'frameName',
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

    it('Should switch to iframe', async () => {
        frame = await switchToFrameByName(page, data.name);
    });

    it('Should get text from iframe', async () => {
        const text = await getTextContent(frame, data.frame.selector);
        expect(text).to.eql(data.frame.text);
    });

});

after(() => browser.close());
