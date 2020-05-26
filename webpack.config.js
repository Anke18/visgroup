/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-12 13:27:01
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-26 17:22:37
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: "none",
    entry: {
        index: "./src/index.js",
        index0: "./src/index0.js",
        index5: "./src/index5.js",
        index01: "./src/index01.js",
        index05: "./src/index05.js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        // new UglifyJsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // hash: true,
             template: "./src/index.html",
             filename: 'index.html' ,
             chunks: ['index'],
             minify: {
                 minimize: true,
                 removeConments: true,
                 collapseWhitespace: true,
                 minifyCSS: true,
                 minifyJS: true,
 
             }
         }),
         new HtmlWebpackPlugin({
           //  hash: true,
            // title: 'My Awesome application',
           //  myPageHeader: 'Settings',
             template: './src/index0.html',
             chunks: ['index0'],
             filename: 'index0.html' ,
             minify: {
                 minimize: true,
                 removeConments: true,
                 collapseWhitespace: true,
                 minifyCSS: true,
                 minifyJS: true,
             }
         }),
         new HtmlWebpackPlugin({
             //  hash: true,
              // title: 'My Awesome application',
             //  myPageHeader: 'Settings',
               template: './src/index5.html',
               chunks: ['index5'],
               filename: 'index5.html' ,
               minify: {
                   minimize: true,
                   removeConments: true,
                   collapseWhitespace: true,
                   minifyCSS: true,
                   minifyJS: true,
               }
           }),
           new HtmlWebpackPlugin({
             //  hash: true,
              // title: 'My Awesome application',
             //  myPageHeader: 'Settings',
               template: './src/index01.html',
               chunks: ['index01'],
               filename: 'index01.html' ,
               minify: {
                   minimize: true,
                   removeConments: true,
                   collapseWhitespace: true,
                   minifyCSS: true,
                   minifyJS: true,
               }
           }),
           new HtmlWebpackPlugin({
             //  hash: true,
              // title: 'My Awesome application',
             //  myPageHeader: 'Settings',
               template: './src/index05.html',
               chunks: ['index05'],
               filename: 'index05.html' ,
               minify: {
                   minimize: true,
                   removeConments: true,
                   collapseWhitespace: true,
                   minifyCSS: true,
                   minifyJS: true,
               }
           }),
           
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,  // 用正则去匹配要用该 loader 转换的 CSS 文件
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}