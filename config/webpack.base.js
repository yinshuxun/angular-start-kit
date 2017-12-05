import path from 'path'
import { root } from './helpers'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DefinePlugin from 'webpack/lib/DefinePlugin'
import { ngcWebpackSetup ,DEFAULT_METADATA} from './build-utils'

const entry = {
    main: root('src/main.ts'),
    polyfills: root('src/polyfills.ts')
}

module.exports = function(options) {
    const isProd = options.env === 'production';
    const METADATA = Object.assign({}, DEFAULT_METADATA, options.metadata || {});
    const ngcWebpackConfigs = ngcWebpackSetup(isProd, METADATA)

    return {
        entry,
        output: {
            path: root('dist'),
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                ...ngcWebpackConfigs.loaders,
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
            new DefinePlugin({
                'ENV': JSON.stringify(METADATA.ENV),
                'AOT': METADATA.AOT,
                'process.env.ENV': JSON.stringify(METADATA.ENV),
                'process.env.NODE_ENV': JSON.stringify(METADATA.ENV)
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
            })
        ]
    }
}