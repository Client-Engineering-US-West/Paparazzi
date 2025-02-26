/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig
  };
})();
