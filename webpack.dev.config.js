const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader', // 创建 <style></style>
                    },
                    { 
                        loader: 'css-loader',  // 转换css
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                    loader: 'style-loader', 
                    },
                    {
                    loader: 'css-loader',
                    },
                    {
                    loader: 'less-loader', // 编译 Less -> CSS
                    },
                ],
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8000
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}