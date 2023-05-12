---
title: Radio 单选框
group:
  title: 数据输入
  order: 4
---

## 基础用法

<code src="./__demo__/base"></code>

## 单选类型

<code src="./__demo__/type"></code>

## 单选列表

<code src="./__demo__/options"></code>

## API

### Radio

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中（受控模式） | boolean | `-` |
| defaultChecked | 初始是否选中 | boolean | `-` |
| disabled | 是否禁用 | boolean | `-` |
| className | 节点类名 | string \| string[] | `-` |
| style | 节点样式 | CSSProperties | `-` |
| value | 控件的 `value` | T | `-` |
| onChange | 值变化的回调 | (checked: boolean, event: ChangeEvent) => void | `-` |

### Radio.Group

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | `Radio` 的 name | string | `-` |
| type | 单选的类型，是单选还是按钮 | 'radio' \| 'button' | `radio` |
| className | 节点类名 | string \| string[] | `-` |
| defaultValue | 默认选中的值 | any | `-` |
| options | 以数组配置的形式来设置单选组 | (string \| number \| { label: ReactNode; value: any; disabled?: boolean })[] | `-` |
| style | 节点样式 | CSSProperties | `-` |
| value | 选中的值（受控模式） | any | `-` |
| onChange | 点击单选的回调 | (value: any, event: ChangeEvent) => void | `-` |
