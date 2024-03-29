const path = require("path");

module.exports={
    mode: "development",
    entry: {
        index: "./scripts/index.js",
        script: "./scripts/scriptNew.js",
        contact: "./scripts/contact.js/indexContact.js"
    },

    output: {
        path: path.resolve(__dirname,"public"),
        filename: '[name].bundle.js',
    },
};