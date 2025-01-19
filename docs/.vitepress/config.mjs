import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Awesome Project",
  description: "A Site developed with VitePress",
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Settings', link: '/settings' }
    ],

    sidebar: [
      {
        text: 'Tutorials',
        items: [
          { 
            text: 'Linux Kernel',
            collapsible: true,
            collapsed: true,
            items: [
              {text: 'Part-1 Overview', link: '/linux-kernel/p1'},
              {text: 'Part-2 Architecture', link: '/linux-kernel/p2'},
              {text: 'Part-3 Boot Process', link: '/linux-kernel/p3'},
              {text: 'Part-4 Terminal, Syscall', link: '/linux-kernel/p4'}
            ]
          },
          { text: 'Other Topic', link: '/other-topic' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Thank you for learning with us.',
      copyright: 'Copyright © 2025'
    },
    
    // Adding Algolia Search
    search: {
      provider: 'algolia',
      options: {
        apiKey: 'YOUR_ALGOLIA_API_KEY',
        indexName: 'YOUR_ALGOLIA_INDEX_NAME',
      }
    }
  }
})
