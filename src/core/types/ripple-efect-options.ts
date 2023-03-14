import type { ThemeColorVariants } from './color-variants';

export interface RippleEffectOptions {
  center?: boolean;
  color?: ThemeColorVariants | 'default';
  animationTime?: number;
}
