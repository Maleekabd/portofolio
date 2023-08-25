const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[fullhash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: [miniCssExtraPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/' // Direktori output dalam dist
                        }
                    }
                ]
            },
            {
                test: /\.bin$/,
                use: 'raw-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new miniCssExtraPlugin(),
    ],
}