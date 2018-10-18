[![Build Status](https://travis-ci.org/k03mad/puppeteer-extra-commands.svg?branch=master)](https://travis-ci.org/k03mad/puppeteer-extra-commands) [![Dependencies](https://david-dm.org/k03mad/puppeteer-extra-commands.svg)](https://github.com/k03mad/puppeteer-extra-commands/blob/master/package.json) [![LCommit](https://img.shields.io/github/last-commit/k03mad/puppeteer-extra-commands.svg)](https://github.com/k03mad/puppeteer-extra-commands/commits/master)

[![Downloads](https://img.shields.io/npm/dt/puppeteer-extra-commands.svg)](https://www.npmjs.com/package/puppeteer-extra-commands) [![NPM](https://img.shields.io/npm/v/puppeteer-extra-commands.svg)](https://www.npmjs.com/package/puppeteer-extra-commands) ![Node](https://img.shields.io/node/v/puppeteer-extra-commands.svg)

![Size](https://img.shields.io/github/repo-size/k03mad/puppeteer-extra-commands.svg) [![install size](https://packagephobia.now.sh/badge?p=puppeteer-extra-commands)](https://packagephobia.now.sh/result?p=puppeteer-extra-commands)

## Tiny library with additional puppeteer commands

Use commands this way:

```js
const puppeteer = require('puppeteer');
const p = require('puppeteer-extra-commands');

(async () => {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto('http://example.com');
    const [text] = await p.getTextContent(page, 'h1'); // 'Example Domain'
    const [prop] = await p.getCssProperty(page, 'h1', 'font-size'); // '32px'
    const [href] = await p.getAttribute(page, 'a', 'href'); // 'http://www.iana.org/domains/example'

    await browser.close();
})();
```

All available commands:

> [clickForNavigation](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/clickForNavigation.js)\
> [getAttribute](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getAttribute.js)\
> [getCssProperty](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getCssProperty.js)\
> [getTextContent](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getInnerText.js)\
> [getWindowOffset](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/getWindowOffset.js)\
> [saveScreenshot](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/saveScreenshot.js)\
> [scrollWindowBy](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/scrollWindowBy.js)\
> [switchToFrameIncludes](https://github.com/k03mad/puppeteer-extra-commands/blob/master/commands/switchToFrameIncludes.js)

A little more abstract examples:

```js
const frame = await p.switchToFrameIncludes(page, 'url', 'mysite.hello.com/iframe.html');
const text = await p.getTextContent(frame, '.titles'); // ['title1', 'title2', 'title3']
// ...
const frame = await p.switchToFrameIncludes(page, 'name', 'auth');
await p.scrollWindowBy(frame, {y: 100});
const newPosition = await p.getWindowOffset(frame); // {x: 0; y: 100}
```

### Tests

```bash
# run all
npm run test

# or one test
npm run one-test --test=getText

# disable headless mode
npm run one-test --test=getText --show
```
