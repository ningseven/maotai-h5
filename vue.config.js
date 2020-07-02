module.exports = {
    publicPath: "./",
    assetsDir: 'assets',
    runtimeCompiler: true,
    // entry: './src/main.js',
    indexPath: "index.html",
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             'style-loader',
    //             'css-loader'
    //         ]
    //     }, {
    //         test: /\.(png|svg|jpg|gif)$/,
    //         use: [
    //             'file-loader'
    //         ]
    //     }]
    // }
}

// const autoprefixer =
//     require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');

// module.exports = {
//     css: {
//         loaderOptions: {
//             postcss: {
//                 plugins: [
//                     autoprefixer({

//                         browsers: ['Android >= 4.0', 'iOS >= 7']
//                     }),
//                     pxtorem({

//                         rootValue: 37.5,
//                         propList: ['*'],
//                     })
//                 ]
//             }
//         }
//     }
// };