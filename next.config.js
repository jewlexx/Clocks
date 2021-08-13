// TODO Add service worker
// Idk if this should work or if there is a better way but it does work so yea
function customBuildSteps() {
  require('./scripts/prebuild.js');
}

const config = {};

customBuildSteps();

module.exports = config;
