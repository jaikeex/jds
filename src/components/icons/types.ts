import type { ThemeColorVariants } from 'core/types';
import type { SvgColoredIconProps } from './SvgColoredIcon';
import type { SvgIconProps } from './SvgIcon';

export type IconClassKey = 'root';

export type JdsIcon = React.ReactElement<SvgIconProps | SvgColoredIconProps>;
