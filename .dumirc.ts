import { defineConfig } from 'dumi';

const repo = 'demo2'; // 项目名

export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: '快维斯特',
    title: 'quest-component',
    footer: false,
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
      weibo: 'https://xxxx',
      twitter: 'https://xxxx',
      gitlab: 'https://xxxx',
      facebook: 'https://xxxx'
    },
    nav: [
      { title: '组件', link: '/components/abb-button' },
    ],
    sidebar: {
      '/components': [
        {
          title: 'ABB',
          children: [
            {
              title: 'Button',
              link: 'components/abb-button',
            },
          ],
        },
        {
          title: '贝加莱',
          children: [
            {
              title: 'Button',
              link: 'components/bjl-button',
            },
          ],
        },
      ]
    }
  },
});
