/* eslint-disable import/no-extraneous-dependencies */
const favicons = require('favicons');
const { resolve } = require('path');
const fs = require('fs-extra');

const source = resolve(__dirname, '..', 'src', 'images', 'icon.png');

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
    appleStartup: false,
    coast: false,
    favicons: true,
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
function callback(error, response) {
  if (error) {
    console.log(error.message);
    return;
  }
  const path = resolve(__dirname, '..', 'public', 'icons');
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
  fs.mkdirSync(path);
  response.images.forEach((image) => {
    fs.writeFileSync(resolve(path, image.name), image.contents);
  });
  fs.writeFileSync(resolve(path, '..', 'manifest.webmanifest'), response.files[0].contents);
  console.log('Finished generating icons and manifest');
}

console.log('Generating icons and manifest');
favicons(source, configuration, callback);
