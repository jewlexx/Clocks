// TODO Add service worker
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// Idk if this should work or if there is a better way but it does work so yea
function customBuildSteps() {
  require('./scripts/icons.js');
}

const pwaconfig = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    runtimeCaching,
  },
});

const config = {};

customBuildSteps();

module.exports = config;
