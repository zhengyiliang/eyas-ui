---
title: 'button'
nav:
  title: 开发指南
---

## 思考

- 按钮类型有哪几种
- 如何实现不同样式风格的控制

## 样式控制

按钮风格`primary`、`scondary`、`text`、`outline`、 `link`
按钮状态 `default`、`danger`、`warning`、`success`
主要控制`border-color` 、 `background-color`、`color`这三种在 `disabled` 、`hover`、`active`下的样式

例如：

```less
// type = primary, status = default   样式：border-color
@btn-primary-border-color: '';
// type = primary, status = warning  样式：border-color
@btn-primary-border-color-warning: '';
// type = primary, status = warning  样式：hover 下的 border-color;
@btn-primary-border-color-warning_hover: '';
```

以上情况全排列组成不同的 less 变量

利用 less 预处理器的命名空间和访问符（有点类似函数的封装），定义好各种形态的样式

```less
.btn-type(@type) {
  .eyas-ui-@{type} {
    // ...
  }
}

.btn-status(@type, @status) {
  .eyas-ui-@{type}-@{status} {
    // ...
  }
}

.btn-type(primary);
.btn-status(primary, warning);
```

## 总结

按钮组件的编写主要在于如何设计不同状态下的按钮样式
