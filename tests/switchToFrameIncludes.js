const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');
const switchToFrameIncludes = require('../commands/switchToFrameIncludes');
const getTextContent = require('../commands/getTextContent');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');

let browser, frame, page;

const data = {
    name: 'frameName',
    url: 'iframe.html',
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

    it('Should switch to iframe by name', async () => {
        frame = await switchToFrameIncludes(page, 'name', data.name);
    });

    it('Should get text from iframe', async () => {
        const text = await getTextContent(frame, data.frame.selector);
        expect(text).to.eql(data.frame.text);
    });

    it('Should switch to iframe by url', async () => {
        frame = await switchToFrameIncludes(page, 'url', data.url);
    });

    it('Should get text from iframe', async () => {
        const text = await getTextContent(frame, data.frame.selector);
        expect(text).to.eql(data.frame.text);
    });

});

after(() => browser.close());
