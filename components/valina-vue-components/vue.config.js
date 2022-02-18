// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    css: {
        extract: false,
        sourceMap: process.env.NODE_ENV !== "production"
    },
    pages: {
        index: {
            entry: "src/main.ts",
            template: "public/index.html",
            filename: "index.html",
            title: "comm-components"
        }
    },
    /**
   * Symbolic Links in node_modules
   * @see {@link https://cli.vuejs.org/guide/troubleshooting.html#running-installation-with-sudo-or-as-root}
   */
    chainWebpack: config => {
        config.resolve.symlinks(false);
    }
    // configureWebpack: {
    //   plugins: [new BundleAnalyzerPlugin()],
    // },
};
