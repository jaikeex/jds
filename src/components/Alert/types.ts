export interface AlertLocation {
  horizontal: 'center' | 'left' | 'right';
  vertical: 'bottom' | 'top';
}

export type AlertClassKey = 'root' | 'info' | 'action' | 'icon' | 'message' | 'closeBtn' | '@keyframes appear';
