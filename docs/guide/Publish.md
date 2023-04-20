---
title: 发布流程
nav:
  title: 开发指南
---

## 部署文档

```ts
export default {
  base: '/eyas-ui/',
  publicPath: '/eyas-ui/',
  // 其他配置
};
```

### 手动部署

借助 [gh-pages](https://github.com/tschaub/gh-pages) 可以轻松帮助我们部署文档到 Github Page

```shell
npm install gh-pages --save-dev
# or
yarn add gh-pages -D
```

`package.json` 中添加

```json
"scripts": {
  "deploy": "gh-pages -d docs-dist"
}
```

编译生成 `docs-dist` 目录

```shell
npm run docs:build
```

一键发布

```shell
npm run deploy
```

### 自动部署

新建 `.github/workflows/gh-pages.yml` 文件

```yml
name: eyas-ui
on:
  push:
    branches:
      - main # default branch 监听main分支push后自动部署
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      # 文档编译命令
      - run: npm run docs:build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # 打包后的文档目录
          publish_dir: ./docs-dist
```

## 发布 npm 包

发布之前需要在 package.json 加配置，添加一些必要的描述信息。

```json
  "private": false, // or "publishConfig": { "access": "public" },
  "name": "eyas-ui",
  "version": "1.0.0", // 版本号，每次发布需要更新版本号
  "description": "A react library developed with dumi",
  "author": "Mr.z",
  "license": "MIT",
  "keywords": [ // 关键词，有利于其他人搜索到
    "dumi",
    "design",
    "frontend",
    "react",
    "react-component",
    "ui"
  ],
  "homepage": "https://zhengyiliang.github.io/eyas-ui", // 组件库文档地址
  "repository": {
    "type": "git",
    "url": "https://github.com/zhengyiliang/eyas-ui" // 代码仓库
  },
   "files": [ // 将哪些文件上传到 npm 上去
    "dist"
  ],
```

`执行npm login，依次输入注册npm时的username, password, email后，执行npm whoami能终端输出用户名，说明登录成功，最后执行npm publish发包。`

报错： 403：npm 包名已被使用
其他报错可以根据报错信息做相应处理
