﻿"use strict";

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "src/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }
        ]
    }
};