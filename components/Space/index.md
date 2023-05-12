---
title: Space 间距
group:
  title: 布局
  order: 2
---

## 间距大小

<code src="./__demo__/size"></code>

## API

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| wrap | 环绕类型的间距，用于折行的场景。 | boolean | `-` |
| align | 对齐方式 | 'start' \| 'end' \| 'center' \| 'baseline' | `-` |
| direction | 间距方向 | 'vertical' \| 'horizontal' | `horizontal` |
| split | 设置分隔符 | ReactNode | `-` |
| className | 节点类名 | string \| string[] | `-` |
| size | 尺寸。 | [SpaceSize](#spacesize) \| [SpaceSize[]](#spacesize) | `small` |
| style | 节点样式 | CSSProperties | `-` |

## SpaceSize

```ts
export type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number;
```
