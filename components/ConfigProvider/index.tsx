import { createContext } from 'react';
import type { ConfigProviderProps } from './interface';

const defaultProps: ConfigProviderProps = {
  prefixCls: 'eyas-ui',
  size: 'default',
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'eyas-ui'}-${componentName}`,
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultProps);
