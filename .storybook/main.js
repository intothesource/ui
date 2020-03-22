module.exports = {
  stories: ['../projects/**/*.stories.ts'],
  webpackFinal: async (config, { configType }) => {

    config.performance = config.performance || {}
    config.performance.hints = false

    // Return the altered config
    return config;
  },
};
