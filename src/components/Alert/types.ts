export interface AlertLocation {
  horizontal: 'center' | 'left' | 'right';
  vertical: 'bottom' | 'top';
}

export type AlertAppearance =
  | 'default'
  | 'success'
  | 'danger'
  | 'primary'
  | 'dark';
