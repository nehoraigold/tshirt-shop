const path = require('path');
const Html = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './client/src/index.tsx',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'server/dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'client/dist'),
        compress: true,
        port: 9000
    },
    devtool: "source-map",
    plugins: [
        new Html({ template: "./client/public/index.html" }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true
                    }
                }],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/
            },
            {
                resolve: {
                    extensions: ['.ts', '.tsx', '.js']
                },
                test: /\.(ts|tsx)$/,
                exclude: "/node_modules/",
                loader: 'ts-loader'
            }
        ]
    }
};