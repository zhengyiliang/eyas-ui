import { ChangeEvent, CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface RadioProps<T = any>
  extends Omit<
    HTMLAttributes<HTMLLabelElement>,
    'children' | 'className' | 'onChange'
  > {
  /**
   * @description 根据 value 进行比较，判断是否选中
   */
  value?: T;
  /**
   * @description 指定当前是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 初始是否选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * @description 禁用状态
   */
  disabled?: boolean;
  onChange?: (checked: boolean, event: ChangeEvent) => void;
}

export interface RadioGroupProps {
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  /**
   * @description radio name属性
   */
  name?: string;
  /**
   * @description 单选的类型，是单选还是按钮
   * @default radio
   */
  type?: 'radio' | 'button';
  /**
   * @description 点击单选的回调
   */
  onChange?: (value: any, event: ChangeEvent) => void;
  /**
   * @description 默认选中的值
   */
  defaultValue?: any;
  /**
   * @description 选中的值（受控模式）
   */
  value?: any;
  /**
   * @description 以数组配置的形式设置单选组
   */
  options?: (
    | string
    | number
    | { label: ReactNode; value: any; disabled?: boolean }
  )[];
}

export interface RadioGroupContextProps {
  type: RadioGroupProps['type'];
  value?: any;
  disabled?: boolean;
  group?: boolean;
  name?: RadioGroupProps['name'];
  onChangeValue?: (value: any, event: ChangeEvent) => void;
}
