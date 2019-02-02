'use strict';

const fillForm = require('../commands/fillForm');
const options = require('./lib/browser');
const puppeteer = require('puppeteer');
const {expect} = require('chai');
const {openLocalHtmlTest} = require('./lib/commands');

let browser, page;

const data = {
    form: {
        firstname: '[name="firstname"]',
        lastname: '[name="lastname"]',
        submit: '[type="submit"]',
    },
    text: {
        firstname: 'myfirstname',
        lastname: 'mylastname',
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

    it('Should fill and submit form', async () => {
        await fillForm(page, [
            {field: data.form.firstname, text: data.text.firstname},
            {field: data.form.lastname, text: data.text.lastname},
            {click: data.form.submit},
        ]);
        await page.waitFor(100);
        const url = await page.url();
        expect(url).includes(`?firstname=${data.text.firstname}&lastname=${data.text.lastname}`);
    });

});

after(() => browser.close());
