const WIDTH = 1366;
const HEIGHT = 768;

module.exports = {
    headless: !process.env.npm_config_show,
    defaultViewport: {width: WIDTH, height: HEIGHT},
    args: [
        `--window-size=${WIDTH},${HEIGHT}`,
        '--disable-infobars',
    ],
};
