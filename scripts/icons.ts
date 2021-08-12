import favicons from 'favicons';
import { resolve } from 'path';
import fs from 'fs-extra';

const source = resolve(__dirname, '..', 'src', 'images', 'icon.png');
const configuration: Partial<favicons.FaviconOptions> = {
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
function callback(error: any, response: favicons.FaviconResponse): void {
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
}

favicons(source, configuration, callback);
