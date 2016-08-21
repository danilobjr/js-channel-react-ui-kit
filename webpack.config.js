const path = require('path');
const resolvePath = (value = '') => path.resolve(__dirname, value)

module.exports = {
    entry: resolvePath('src/index.jsx'),
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [resolvePath('src')],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']
                }
            }
        ]
    },
    resolve: {
        root: resolvePath(),
        alias: {
            components: 'src/components',
            styles: 'src/styles',
            utils: 'src/utils'
        },
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    }
}
