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
              title: 'Foo',
              link: 'components/Foo',
            },
            {
              title: 'Abb',
              link: 'components/Abb',
            },
          ],
        },
        {
          title: '贝加莱',
          children: [
            {
              title: 'Test',
              link: 'components/Test',
            },
          ],
        },
      ]
    }
  },
});
