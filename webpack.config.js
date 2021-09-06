const path = require("path")
const defaultConfig = require("@wordpress/scripts/config/webpack.config.js")

module.exports = {
  ...defaultConfig,
  ...{
    entry: {
      index: path.resolve(process.cwd(), "src", "index.js"),
      frontend: path.resolve(process.cwd(), "src", "frontend.js")
    }
  }
}
