module.exports = {
  rollup(config, options) {
    config.output.sourcemap = false
    options.env = 'production'
    return config
  },
}