---
title: 'radio'
nav:
  title: 开发指南
---

## label

- `<label>` 标签为 input 元素定义标注（标记）。

- `label` 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 `label` 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

- `<label>` 标签的 for 属性应当与相关元素的 id 属性相同。

## 思路

组件分为 Radio 和 Radio.Group

- 实现 Radio

  - 利用 label 标签与原生 `<input type="radio">` 绑定在一起
  - 监听 Group 组件带来的 disabled 和 value
  - 根据 以上两个值判断当前的 Radio 是否为选中状态和禁用状态

```html
<!-- radio 骨架 -->
  <label>
    <!-- 隐藏，用来处理事件 -->
    <input type="radio" value="" checked="" onChange=""  onClick=""/>
    <!-- 单选样式 -->
    <span class="eyas-ui-radio-icon"><span>
    <!-- 单选框文本 -->
    <span class="eyas-ui-radio-text">文本</span>
  </label>
```

- Radio.Group 实现

  - Group 组件包含一个或多个 Radio 组件
  - Group 组件 value 属性用来决定子组件 Radio 的选中状态（与 Radio 的 value 属性做比较）
  - 利用 createContext 上下文，为一组单选框组提供当前选中的值

```tsx
// Radio.tsx
const mergeProps = { ...props };

if (context.group) {
  mergeProps.checked = context.value === props.value;
  mergeProps.disabled = !!(context.disabled || props.disabled);
}
```

Radio 组件根据上下文判定当前选中状态
