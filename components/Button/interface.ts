import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export interface BaseButtonProps {
  children: ReactNode;
  type: 'default' | 'primary' | 'text';
  disabled: boolean;
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

export type ButtonProps = FinalButtonProps;
