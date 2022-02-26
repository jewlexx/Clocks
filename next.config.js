const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  'pwa': {
      'dest': 'public',
      // disable: process.env.NODE_ENV === 'development',
      // register: false
  }

}

module.exports = withBundleAnalyzer(withPWA(config));
