import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XMFLS-BILLIARDS",
  description: "XMFLS-BILLIARDS WEBSITE",
  head: [
    ['link', { rel: 'icon', href: '/img/XMFLS.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/XMFLS.png", // 页面上显示的logo
    nav: [
      { text: '主页', link: '/' },
      { text: '规则', link: '/rules/厦外台球室管理制度.md' },
      { text: '段赛', link: '/race/' },
      { text: '成员', link: '/members/' },
      { text: '关于我们', link: '/aboutUs/' },
    ],

    sidebar:
        {
          '/rules/': [
            {
              text: '规则',
              items: [
                { text: '厦外台球室管理制度', link: '/rules/厦外台球室管理制度.md' },
                { text: '台球桌基本结构示意图', link: '/rules/台球桌基本结构示意图.md' },
                { text: '八球基本规则及常用细则介绍', link: '/rules/八球基本规则及常用细则介绍.md' },
                { text: '九球基本规则及常用细则介绍', link: '/rules/九球基本规则及常用细则介绍.md' },
              ]
            }
          ],
        },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0wwind/XMFLS-BILLIARDS' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 XMFLS-BILLIARDS'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel:'亮/暗模式',
    lightModeSwitchTitle:'调整为亮色模式',
    darkModeSwitchTitle:'调整为暗色模式',
    sidebarMenuLabel:'菜单',
    returnToTopLabel:'回到顶部',
  },
})
