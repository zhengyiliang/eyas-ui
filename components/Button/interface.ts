import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export interface BaseButtonProps {
  children: ReactNode;
  /**
   *  @description: 类型
   *  @default default
   */
  type?: 'default' | 'secondary' | 'primary' | 'text' | 'outline';
  /**
   *  按钮状态
   * @default default
   */
  status?: 'warning' | 'danger' | 'success' | 'default';
  /**
   *  按钮的尺寸
   * @default default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
   * @default square
   */
  shape?: 'circle' | 'round' | 'square';
  /**
   * 按钮形状变成正方式
   */
  iconOnly?: boolean;
  /**
   * 加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 禁用状态
   * @default true
   */
  disabled?: boolean;
  /**
   * 块级元素
   * @default false
   */
  block?: boolean;
  style: CSSProperties;
  className: string;
  onClick: (e: MouseEvent) => void;
}

export type FinalButtonProps = {
  /**
   * 按钮原生的 html type 类型
   */
  htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
  Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type ButtonProps = Partial<FinalButtonProps>;
