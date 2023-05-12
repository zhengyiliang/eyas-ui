---
title: Button 按钮
group:
  title: 通用
  order: 1
---

## 按钮类型

<code src="./__demo__/type"></code>

## 按钮状态

<code src="./__demo__/status"></code>

## 按钮尺寸

<code src="./__demo__/size"></code>

## 按钮禁用

<code src="./__demo__/disabled"></code>

## 加载状态

<code src="./__demo__/loading"></code>

## 按钮形状

<code src="./__demo__/shape"></code>

## 长按钮

<code src="./__demo__/block"></code>

## API

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | `-` |
| iconOnly | 只有图标，让按钮宽高强制相等。 | boolean | `-` |
| loading | 按钮是否是加载状态 | boolean | `-` |
| block | 按钮宽度随容器自适应。 | boolean | `-` |
| htmlType | 按钮原生的 html type 类型 | 'button' \| 'submit' \| 'reset' | `button` |
| shape | 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形 | 'circle' \| 'round' \| 'square' | `square` |
| size | 按钮的尺寸 | 'mini' \| 'small' \| 'default' \| 'large' | `default` |
| status | 按钮状态 | 'warning' \| 'danger' \| 'success' \| 'default' | `default` |
| type | 按钮主要分为六种按钮类型：主要按钮、次级按钮、文字按钮、线性按钮、link，`default` 为次级按钮。 | 'default' \| 'primary' \| 'secondary' \| 'link' \| 'text' \| 'outline' | `default` |
| className | 节点类名 | string | `-` |
| style | 节点样式 | CSSProperties | `-` |
| onClick | 点击按钮的回调 | (e: Event) => void | `-` |
