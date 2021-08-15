const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

function customBuildSteps() {
  require('./scripts/prebuild.js');
}

customBuildSteps();

module.exports = withBundleAnalyzer({});
