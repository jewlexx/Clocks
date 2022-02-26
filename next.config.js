const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  pwa: {
    dest: 'public',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withBundleAnalyzer(withPWA(config));
