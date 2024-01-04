module.exports = {
    mode: "production",
    entry: "./src/index.js",
    devServer: {
        static: "./dist",
        port: 3000,
        open: true,
    },
};