const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  css: {
    extract: false,
    sourceMap: process.env.NODE_ENV !== "production",
  },
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: "comm-components",
    },
  },
  /**
   * Symbolic Links in node_modules
   * @see {@link https://cli.vuejs.org/guide/troubleshooting.html#running-installation-with-sudo-or-as-root}
   */
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    // copy langJson to lib(dist)
    config
      .plugin("copy")
      .use(new CopyPlugin({
        patterns: [
           { 
            from: path.resolve(__dirname, "src/i18n/locales"), 
            to: path.resolve(__dirname, "lib") 
           }
        ],
        
      }))
  },
};
