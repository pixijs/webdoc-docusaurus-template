const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const themes = {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme
}

const cssLocation = require.resolve('@pixi/webdoc-docusaurus-template/docusaurus/custom.css')

module.exports = {
    themes,
    cssLocation
}
