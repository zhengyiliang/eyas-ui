import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  base: '/eyas-ui',
  publicPath: '/eyas-ui/',
  outputPath: 'docs-dist',
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    // exclude: [new RegExp('index/components/')],
    base: './docs',
    // exclude: [/\/components\//],
  },
  themeConfig: {
    name: 'eyas-ui',
    nav: [
      {
        title: '开发指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components/button',
      },
    ],
  },
  alias: {
    'eyas-ui': path.join(__dirname, 'components'),
  },
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
});
