module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kamil-smolinski/'
      : '/',

  outputDir: 'dist',

  assetsDir: '',

  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    open: true, // Öffnet den Browser automatisch
    host: '0.0.0.0',
    port: 8080, // Ändert den Standardport
    https: false,
    hot: true, // Hot Module Replacement aktivieren
  },

  configureWebpack: {
    // Plugins, die für alle Umgebungen konfiguriert werden sollen
  },

  chainWebpack: config => {
    // Beispiel für das Hinzufügen eines Loaders für Markdown-Dateien
    config.module
        .rule('markdown')
        .test(/\.md$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end();
  },

  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      // Übergeben Sie Optionen an CSS-Loader
    }
  },

  pwa: {
    name: 'Kamil Smolinski',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },

  pluginOptions: {
    // Übergeben Sie Optionen an das plugin
  }
}
