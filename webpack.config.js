const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './js/index.js'
    } ,
    output : {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins : [
        new HTMLWebpackPlugin({
            title: 'Hostel',
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new miniCss({
            filename: 'style.css',
         }),
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ]
             }
        ]
    }

}