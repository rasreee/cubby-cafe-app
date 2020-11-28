import path, { resolve } from 'path';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: webpack.Configuration = {
    entry: './index.tsx',
    // entry: ['webpack-dev-server?http://localhost:3000', 'webpack/hot/only-dev-server'],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    context: resolve(__dirname, 'src'),
    output: {
        publicPath: 'public',
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './build',
        hotOnly: true,
        port: 3000,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: './src/**/*',
            },
        }),
    ],
};

export default config;
