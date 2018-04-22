module.exports = {
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Home',
            link: '/'
          },

          {
            text: 'Getting Started',
            link: '/getting-started/'
          },

          {
            text: 'Learn',
            link: '/learn/'
          }
        ],
        sidebar: {
          '/getting-started/': genSidebarConfig('Getting Started', [
            '',
            'version-control',
            'node',
            'editor'
          ])
        }
      }
    }
  }
}

/**
 * Generates sidebar config.
 * @param {string} title Title to use on the sidebar head.
 * @param {Array<string>} children routes to markdown files without the `.md` extension
 */
function genSidebarConfig(title, children) {
  return [
    {
      title,
      children,
      collapsable: false
    }
  ]
}
