import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '快维斯特',
    title: 'quest-component',
    footer: false,
    nav: [
      { title: '组件', link: '/components/foo' },
    ],
    sidebar: {
      '/components': [
        {
          title: 'ABB',
          children: [
            {
              title: 'Button',
              link: 'components/foo',
            },
            {
              title: 'test',
              link: 'components/abb',
            },
          ],
        },
        {
          title: '贝加莱',
          children: [
            {
              title: 'Button',
              link: 'components/Test',
            },
          ],
        },
      ]
    }
  },
});
