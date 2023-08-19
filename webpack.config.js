const path = require('path');

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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
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
    }
}