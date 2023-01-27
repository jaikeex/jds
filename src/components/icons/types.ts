export interface IconProps {
  size?: IconSize;
  color?: IconColor;
  className?: string;
  styles?: React.CSSProperties;
  testId?: string;
  ariaLabel?: string;
}

export interface FlatIconProps {
  size?: IconSize;
  styles?: React.CSSProperties;
  testId?: string;
  ariaLabel?: string;
}

export type IconSize =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large';

export type IconColor = 'default' | 'success' | 'danger' | 'disabled' | 'focus';
