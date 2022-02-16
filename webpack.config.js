'use strict';

const path = require('path');
const loadLanguages = require('prismjs/components/index');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prism = require('prismjs');

const hl = (text, { lang = 'markup' } = {}) => {
  if (text[0] === '\n') {
    text = text.substring(1);
  }
  return `<code lang="${lang}">${prism.highlight(text, prism.languages[lang], lang)}</code>`;
};
const properties = {
  name: 'vue-babylonjs',
  description: 'A ready-to-go 3d environment for Vue.js using Babylon.js',
  title: 'Vue-BabylonJS Documentation site',
  color: '#42b883',
  public: {
    cdn: '/',
    api: 'http: //localhost:1/v1/',
    stage: 'development',
    name: 'vue-babylonjs',
    version: '1.0.0-beta.7',
    description: 'A ready-to-go 3d environment for Vue.js using Babylon.js',
  },
};

loadLanguages(['pug', 'bash']);
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: './site/index.js',
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    // publicPath: '/',
    filename: '[id].js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './site/index.pug'),
      favicon: path.resolve(__dirname, './site/favicon.png'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'vue-svg-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|glsl)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.pug$/,
        oneOf: [
          // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,

            use: {
              loader: 'pug-plain-loader',
              options: {
                filters: { hl },
                data: {
                  hl,
                  properties,
                },
              },
            },
          },
          // 这条规则应用到 JavaScript 内的 pug 导入
          {
            use: [
              {
                loader: 'raw-loader',
              },
              {
                loader: 'pug-plain-loader',
                options: {
                  data: {
                    properties,
                  },
                },
              },

            ],
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
