<h1 align="center">Eyas UI</h1>

<div align="center">

Eyas UI，是一款基于 Dumi，由 React + TypeScript 开发的个人组件库 🎉。

</div>

该开源项目是我为进阶 React，同时探索组件库设计开发思路所做的，故不可用于生产环境。由于个人设计能力有限， UI 设计方面会大量参考[Ant Design 组件库](https://ant.design/index-cn)以及[Arco Design 组件库](https://arco.design/react/components/)，同时组件的使用方式也会参照 `Ant Design` or `Arco Design` 进行实现。如果你也想学习组件开发，欢迎加入或提供意见，你的 star ⭐，是对我最大的鼓励。

## commit 规范

- ✨ feat：新功能
- 🔧 chore：构建过程或辅助工具的变动
- 📝 docs：仅文档新增/改动
- 🐛 fix：修复 bug
- 🚀 perf：性能优化
- 🔨 refactor：某个已有功能重构
- ⏪ revert：代码回滚
- 🎨 style：代码格式改变
- ✅ test：添加缺失的测试或更正现有的测试
- 📦 build：改变了 build 工具
- 👷 ci：持续集成

## ✨ 特性

- 🌈 提炼组件库设计良好的视觉风格
- 📦 渐进式探索高质量的前端代码的实现
- 🛡 使用 TypeScript 开发，提升开发体验
- ✅ 使用单元测试，为组件稳定性保驾护航
- 📖 提供开发过程的文档思路，助力你学习组件开发
- 🔖 欢迎贡献组件代码，探索最佳实践

## 📦 安装

使用 npm 或 yarn 安装（推荐）

```bash
yarn add eyas-ui
```

```bash
npm install eyas-ui
```

## 🔨 示例

```jsx
import { Button } from 'eyas-ui';

const App = () => (
  <>
    <Button type="primary">Primary Button</Button>
  </>
);
```

引入样式：

```jsx
import 'eyas-ui/dist/index.css';
```

## 计划

🚧 开发中......

- [ ] 开发 Switch 组件

✨ 已完成

- [x] CSS 样式解决方案、初始化文件结构、UI 设计
- [x] 创建入口文件，并发布到 npm
- [x] 开发 Button 组件

## 开源协议

版权 (c) 2023-至今 归 正好有时间 所有. 详情请阅 [LICENSE](./LICENSE).
