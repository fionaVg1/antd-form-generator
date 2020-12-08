const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const minify = process.env.NODE_ENV === 'development' ? false : {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
};
module.exports = { 
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename:'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            minify
        },
        preview: {
            entry:'src/views/preview/main.js',
            template:'public/preview.html',
            filename:'preview.html',
            chunks: ['chunk-vendors', 'chunk-common', 'preview'],
            minify
        }
    },
    chainWebpack: config => {
        config.resolve.symlinks(true);
    },
    configureWebpack: {
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js"
            }
        },
        plugins: [
          new MonacoWebpackPlugin({            
            languages: ['javascript', 'css', 'html', 'typescript', 'json']
          })
        ]
    }
}