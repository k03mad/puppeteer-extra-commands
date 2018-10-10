[![NPM](https://nodei.co/npm/puppeteer-extra-commands.png?downloads=true&stars=true)](https://nodei.co/npm/puppeteer-extra-commands/)

![Build Status](https://travis-ci.org/k03mad/puppeteer-extra-commands.svg?branch=master) ![Dependencies](https://david-dm.org/k03mad/puppeteer-extra-commands.svg)

## Tiny library with additional puppeteer commands

Open browser

```js
const puppeteer = require('puppeteer');
const p = require('puppeteer-extra-commands');

const browser = await puppeteer.launch(options);
const [page] = await browser.pages();
```

And use commands this way

```js
const [text] = await p.getInnerText(page, '.myClass');
console.log(text) // 'this is a text from selector'
```
```js
await p.scrollWindowBy(page, {y: 1000});

const offset = await p.getWindowOffset(page);
console.log(offset) // {x: 0, y: 1000}
```

### Tests

```bash
npm run test
npm run one-test --test=getInner

# disable headless mode
npm run one-test --test=getInner --show
```
