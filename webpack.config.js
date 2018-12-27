const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'fuck'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['js', 'vue', 'json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ {
                    // 前期可以这样测试
                    // loader: path.resolve('./src/loader.js'),
                    // npm link的方式测试omi-loader
                    loader: 'omi-loader',
                    options: {
                        name: 'WHOAMI'
                    }
                }]
            }
        ]
    },
    // resolveloader: {
    //     modules: [
    //         '../node_moules',
    //         path.resolve(__dirname, 'node_moules')
    //     ],
    //     extensions: ['.js', '.json', '.txt'],
    //     // mainFields: ['loader', 'main'],
    //     moduleExtensions: ['-loader'],
    //     alias: {
    //         'txt-loader': path.resolve('./loader.js')
    //     }
    // }
};