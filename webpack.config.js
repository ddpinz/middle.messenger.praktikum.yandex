// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
    mode: 'development',
    entry: ['./static/index.ts', './static/styles/index.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project-name.bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        fallback: {
            fs: false,
            os: false
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json')
                        }
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: PugPlugin.loader
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new PugPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'static/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style-[hash].css'
        })
    ]
};