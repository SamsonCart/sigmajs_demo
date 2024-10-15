// webpack.config.js
const path = require("path");

module.exports = {
    entry: "./src/scripts/scripts.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "src"),
        },
        compress: true,
        port: 9000,
    },
};
