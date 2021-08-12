import favicons from 'favicons';
import { resolve } from 'path';
import fs from 'fs-extra';

const source = resolve(__dirname, '..', 'src', 'images', 'icon.png');
const configuration: Partial<favicons.FaviconOptions> = {
  path: '/',
  appName: null,
  appShortName: null,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: 'auto',
  lang: 'en-US',
  background: '#fff',
  theme_color: '#fff',
  appleStatusBarStyle: 'black-translucent',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  start_url: '/?homescreen=1',
  version: '1.0',
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: true,
    favicons: true,
    firefox: true,
    windows: true,
    yandex: true,
  },
};
const callback = (error: any, response: favicons.FaviconResponse) => {
  if (error) {
    console.log(error.message);
    return;
  }
  const path = resolve(__dirname, '..', 'public', 'images');
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
  fs.mkdirSync(path);
  response.images.forEach((image) => {
    fs.writeFileSync(resolve(path, image.name), image.contents);
  });
  console.log(response.files);
  console.log(response.html);
};

favicons(source, configuration, callback);
