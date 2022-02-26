/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const fs = require('fs/promises');
const favicons = require('../src/lib/favicons/index');

const src = resolve(__dirname, '..', 'src');
const public = resolve(__dirname, '..', 'public');
const images = resolve(src, 'images');
const icons = resolve(public, 'icons');
const lib = resolve(src, 'lib');

const sourceIMG = resolve(images, 'icon.png');
const swFile = fs.readFileSync(resolve(lib, 'sw.js'));
const swContents = swFile.toString();
// "minified"
const minified = swContents.split('\n').join(' ');

fs.writeFile(resolve(public, 'sw.js'), minified);

/**
 * @type {Partial<favicons.FaviconOptions>}
 */
const configuration = {
  path: '/icons/',
  appName: 'Clocks by jamesinaxx',
  appShortName: 'Clocks',
  appDescription: 'A various collection of html clocks designed to be embeddable anywhere',
  developerName: 'jamesinaxxx',
  developerURL: 'https://github.com/jamesinaxx',
  lang: 'en-US',
  background: '#004740',
  theme_color: '#fff',
  appleStatusBarStyle: 'black-translucent',
  display: 'fullscreen',
  orientation: 'any',
  scope: '/',
  start_url: '/',
  version: '1.0.0',
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    favicons: true,
    appleStartup: false,
    coast: false,
    firefox: false,
    windows: false,
    yandex: false,
  },
};

/**
 *
 * @param {any} error
 * @param {favicons.FaviconResponse} response
 * @returns {void}
 */
async function callback(error, response) {
  if (error) {
    console.log(error.message);
    return;
  }
  if (fs.existsSync(icons)) {
    await fs.rm(icons, { recursive: true, force: true });
  }
  await fs.mkdir(icons);
  response.images.forEach(async (image) => {
    await fs.writeFile(resolve(icons, image.name), image.contents);
  });
  await fs.writeFile(resolve(icons, '..', 'manifest.webmanifest'), response.files[0].contents);
  console.log('Finished generating icons and manifest');
}

console.log('Generating icons and manifest');
favicons(sourceIMG, configuration, callback);
