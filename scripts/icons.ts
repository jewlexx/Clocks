import favicons from 'favicons';
import { resolve } from 'path';

const source = resolve(__dirname, '..', 'public', 'icon.png');
const configuration = {
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
const callback = (error: any, response: any) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(response.images);
  console.log(response.files);
  console.log(response.html);
};

favicons(source, configuration, callback);
