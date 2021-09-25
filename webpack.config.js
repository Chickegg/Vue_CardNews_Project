const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
        // 하나로 합쳐질 파일의 확장자 명
    },
    entry: {
        // test 확장자파일에 대해서 어떠한 loader들을 사용하여 합쳐줄지 정하는 부분
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
            }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
            }
        ],
    },
    plugins: [ // output 직전에 추가적인 작업을 해주는 부분
        new VueLoaderPlugin(),
    ],
    output: { // 파일이 들어가서 결과가 나오는 부분.
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
      }
};