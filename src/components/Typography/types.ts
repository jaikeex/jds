import type { TypographyVariants, ThemeColorVariants } from 'core/types';

export type TypographyColorVariants = ThemeColorVariants | 'default';

export type TypographyClassKey = TypographyVariants | 'root' | 'uppercase';
