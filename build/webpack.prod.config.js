const path = require('path');
const merge = require('webpack-merge');
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');
const commonConfig = require('./webpack.base.config.js');
const CompressionWebpackPlugin = require('compression-webpack-plugin');


module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        // 输出目录
        path: path.resolve(__dirname, '../dist'),
        // 文件名称
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    devtool: 'cheap-module-source-map',
    // 测试引入react cdn 然后再开启
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors'
                }
            }
        }
    },
    plugins: [
        // 清除无用 css---生产环境---csstree-shaking
        new PurifyCSS({
            paths: glob.sync([
                // 要做 CSS Tree Shaking 的路径文件
                path.resolve(__dirname, '..', 'src/*.html'),
                path.resolve(__dirname, '..', 'src/*.js'),
                path.resolve(__dirname, '..', 'src/**/*.tsx')
            ])
        }),
        // 开启 gzip
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});
