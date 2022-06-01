const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: 'docs/main.js',
    libs: [
      'vue',
      'vue-router',
      'prismjs',
      'vue-material',
    ],
    resource: [
      'prismjs/themes/prism-tomorrow.css',
      'docs/fonts/iconfont.css',
    ],
    vendor: [
      'docs/components/App.vue',
      'docs/components/CateView.vue',
      'docs/components/DocPreview.vue',
      'docs/components/Navigator.vue',
      'docs/components/RootFrame.vue',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../documents'),
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: [/_cache/],
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true,
              preventExtract: true,
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   use: ['url-loader'],
      // },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   use: ['url-loader'],
      // },
    ],
  },
  resolve: {
    alias: {
      docs: path.resolve(__dirname, '../docs'),
      '@components': path.resolve(__dirname, '../components'),
    },
  },
  plugins: [
    // new ESLintPlugin({
    //   extensions: ['js', 'vue'],
    // }),
    new VueLoaderPlugin(),
    new webpack.ids.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/template/index.html'),
      chunks: ['libs', 'vendor', 'resource', 'main'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'examples',
          to: 'examples',
        },
        {
          from: 'dist',
          to: 'dist',
        },
      ],
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'libs', 'resource', 'manifest'],
    //   minChunks: Infinity,
    // }),
    // new InlineManifestWebpackPlugin({
    //   name: 'webpackManifest',
    // }),
  ],
  mode: 'development', // production/development
  devServer: {
    client: {
      overlay: false,
    },
    liveReload: true,
    watchFiles: ['docs/md//**/*'],
  },
  devtool: 'source-map',
};
