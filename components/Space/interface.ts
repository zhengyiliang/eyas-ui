import { CSSProperties, ReactNode } from 'react';

export type SpaceSize = 'mini' | 'small' | 'medium' | 'large' | number;

export interface SpaceProps {
  style?: CSSProperties;
  className?: string;
  align?: 'start' | 'end' | 'center' | 'baseline';
  direction: 'vertical' | 'horizontal';
  size: SpaceSize | SpaceSize[];
  wrap?: boolean;
  split?: ReactNode;
  children?: ReactNode;
}
