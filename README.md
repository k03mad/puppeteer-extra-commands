[![NPM](https://nodei.co/npm/puppeteer-extra-commands.png?downloads=true&stars=true)](https://nodei.co/npm/puppeteer-extra-commands/)

![Build Status](https://travis-ci.org/k03mad/puppeteer-extra-commands.svg?branch=master) ![Dependencies](https://david-dm.org/k03mad/puppeteer-extra-commands.svg)

## Tiny library with additional puppeteer commands

Use commands whits way:

```js
const puppeteer = require('puppeteer');
const p = require('puppeteer-extra-commands');

(async () => {
    const browser = await puppeteer.launch(options);
    const [page] = await browser.pages();

    const frame = await p.switchToFrameByName(page, '.someIframe');
    const [text] = await p.getInnerText(frame, '.myClass');
    console.log(text) // 'this is a text from selector'
})();
```

All available commands:

> [getAttribute](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getAttribute.js)

> [getCssProperty](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getCssProperty.js)

> [getInnerText](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getInnerText.js)

> [getWindowOffset](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getWindowOffset.js)

> [saveScreenshot](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/saveScreenshot.js)

> [scrollWindowBy](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/scrollWindowBy.js)

> [switchToFrameByName](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/switchToFrameByName.js)

### Tests

```bash
npm run test
npm run one-test --test=getInner

# disable headless mode
npm run one-test --test=getInner --show
```
