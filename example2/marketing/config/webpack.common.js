module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // Regex to find js files
                exclude: /node_modules/, // Exclude node_modules folder
                use: {
                    loader: "babel-loader", // Use babel-loader to transpile js files
                    options: {
                        presets: [
                            "@babel/preset-react", // Transpile jsx to js
                            "@babel/preset-env", // Transpile modern js to older js
                        ],
                        plugins: [
                            "@babel/plugin-transform-runtime", // Use babel runtime to transpile async/await
                        ],
                    },
                },
            }
        ]
    }
}