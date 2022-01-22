const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        navbar: './src/navbar.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
        footer: './src/footer.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'Restaurant Page',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};