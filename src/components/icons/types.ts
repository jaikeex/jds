import type { ThemeColorVariants } from 'core/types';
import type { SvgColoredIconProps } from './SvgColoredIcon';
import type { SvgIconProps } from './SvgIcon';

export type IconColorVariants = ThemeColorVariants | 'default';

export type IconClassKey = 'root';

export type JdsIcon = React.ReactElement<SvgIconProps | SvgColoredIconProps>;
