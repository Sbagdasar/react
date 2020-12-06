const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV!=undefined ? process.env.NODE_ENV : "production";


console.log(process.env.NODE_ENV)
console.log(process.env.GLOBAL_VAR)


const config= {
    entry: "./src/app.js",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env",'@babel/preset-react'],
                        plugins: ["@babel/transform-runtime", "transform-class-properties", "@babel/plugin-syntax-dynamic-import"]
                    },
                    // loader: 'file-loader',
                    // options: {
                    //     outputPath: 'js',
                    //     name :`[name].[ext]`
                    // }
                }
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
                        loader: 'less-loader',
                    },

                ], // compiles Less to CSS
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "pug-html-loader",
                        options: {
                            "pretty":true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }
            },

        ]
    },


    plugins : [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        // })


        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new dotenv(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/pug/pages/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: "catalog.html",
            template: './src/pug/pages/catalog.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],




    // dev tool

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true,
        contentBase: '/',
        historyApiFallback: true,
    },



    mode : env,
    devtool : env=="development" ? "eval"  : false,
    watch: env=="development" ? true : false,


    resolve: {
        alias: {
            Comp: path.resolve(__dirname, 'src/components/'),
            Action : path.resolve(__dirname, 'src/action/'),
        }
    }

}


module.exports = config;