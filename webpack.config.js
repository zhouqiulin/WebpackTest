var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: "./dist/js",
        filename: "[name]-[chunkhash].js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "index.html"
        })
    ]
}