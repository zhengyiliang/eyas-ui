import { ReactNode } from 'react';

export interface ConfigProviderProps {
  /**
   * @description 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @default default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * 全局组件类名前缀
   * Global ClassName prefix
   *  eyas-ui
   */
  prefixCls?: string;
  getPrefixCls: (componentName: string, customPrefix?: string) => string;
  zIndex?: number;
  children?: ReactNode;
}
