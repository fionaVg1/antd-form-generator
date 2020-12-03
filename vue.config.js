module.exports = { 
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename:'index.html'
        },
        preview: {
            entry:'src/views/preview/main.js',
            template:'public/preview.html',
            filename:'preview.html'
        }
    },
    chainWebpack: config => {
        config.resolve.symlinks(true);
    }
}