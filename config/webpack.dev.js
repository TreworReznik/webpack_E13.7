module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        port: 3333,
        open: true,
        hot:true,
    },
};