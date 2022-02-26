const { resolve } = require('path');
const fs = require('fs/promises');
const exists = require('fs').existsSync;
const favicons = require('favicons');

const icons = resolve(__dirname, '..', 'public', 'icons');
const sourceIMG = resolve(__dirname, '..', 'src', 'images', 'icon.png');

/**
 * @type {Partial<favicons.FaviconOptions>}
 */
const configuration = {
  path: '/icons/',
  appName: 'Clocks by jamesinaxx',
  appShortName: 'Clocks',
  appDescription:
    'A various collection of html clocks designed to be embeddable anywhere',
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

console.log('Generating icons and manifest');

favicons(sourceIMG, configuration, async (error, response) => {
  if (error) {
    console.log(error.message);
    return;
  }
  if (exists(icons)) {
    await fs.rm(icons, { recursive: true, force: true });
  }
  await fs.mkdir(icons);
  response.images.forEach(async (image) => {
    await fs.writeFile(resolve(icons, image.name), image.contents);
  });
  await fs.writeFile(
    resolve(icons, '..', 'manifest.webmanifest'),
    response.files[0].contents,
  );
  console.log('Finished generating icons and manifest');
});
