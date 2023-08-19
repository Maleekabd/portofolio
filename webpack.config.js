const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "production",
    entry: [
        './src/index.js'
        // './src/pages/Footer.jsx',
        // './src/pages/MyPorto.jsx',
        // './src/components/Navbar.jsx',
        // './src/components/landingPage.jsx',
        // './src/App.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[fullhash].js'
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
                use: ['style-loader', 'css-loader'],
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
}