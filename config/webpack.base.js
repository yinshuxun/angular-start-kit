import path from 'path'
import { root } from './helpers'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import { DEFAULT_METADATA } from './build-utils'
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entry = {
    main: root('src/main.ts'),
    polyfills: root('src/polyfills.ts'),
    vendor: [root('src/vendor.entry.ts')]
}

module.exports = function (options) {
    const isProd = options.env === 'production';
    const METADATA = Object.assign({}, DEFAULT_METADATA, options.metadata || {});
    // const ngcWebpackConfigs = ngcWebpackSetup(isProd, METADATA)

    return {
        entry,
        output: {
            publicPath: '/',
            path: root('dist'),
            filename: '[name].[hash].js',
            chunkFilename: '[id].chunk.js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            alias: {
                app: root('src/app'),
                ars: root('src/app/ars'),
                components: root('src/app/components'),
                service: root('src/app/service')
            }
        },
        module: {
            rules: [
                // ...ngcWebpackConfigs.loaders,
                {
                    test: /\.ts$/,
                    exclude: [/\.spec\.ts$/],
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                useBabel: true,
                                useCache: true,
                            },
                        },
                        'angular2-template-loader',
                        'angular-router-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader'],
                    exclude: [root('src', 'styles')]
                },
                {
                    test: /\.scss$/,
                    use: ['to-string-loader', 'css-loader', 'sass-loader'],
                    exclude: [root('src', 'styles')]
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [root('src/index.html')]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                    use: 'file-loader'
                }
            ],
        },
        plugins: [
            // new BundleAnalyzerPlugin(),
            new webpack.DefinePlugin({
                'ENV': JSON.stringify(METADATA.ENV),
                'AOT': METADATA.AOT,
                'process.env.ENV': JSON.stringify(METADATA.ENV),
                'process.env.NODE_ENV': JSON.stringify(METADATA.ENV)
            }),
            // 启动热替换
            // new webpack.HotModuleReplacementPlugin(),
            // /* 公共库 */
            // new webpack.optimize.CommonsChunkPlugin({
            //     names: ['vendor','mainfest']
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendors', 'manifest'],
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
                async: true,
                minChunks: 3
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: METADATA.title,
                chunksSortMode: function (a, b) {
                    const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];
                    return entryPoints.indexOf(a.names[0]) - entryPoints.indexOf(b.names[0]);
                },
                metadata: METADATA,
                inject: 'body',
                xhtml: true,
                minify: isProd ? {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    keepClosingSlash: true
                } : false
            }),
            new webpack.ContextReplacementPlugin(/colors$/, /^$/)
        ]
    }
}
