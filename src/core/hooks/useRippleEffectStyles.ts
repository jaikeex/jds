import type { Theme } from 'styling/types';
import { createStyles } from 'styling';
import type { RippleEffectOptions } from 'core/types';

export const useRippleEffectStyles = createStyles(
  (theme: Theme) => ({
    '@keyframes ripple': {
      to: {
        transform: 'scale(4)',
        opacity: 0
      }
    },
    root: (props: RippleEffectOptions) => ({
      position: 'absolute',
      borderRadius: '50%',
      transform: 'scale(0)',
      animation: `$ripple ${props.animationTime}ms linear`,
      backgroundColor:
        props.color === 'default' || undefined
          ? theme.palette.rgba(theme.palette.text.primary, 0.35)
          : theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.35)
    })
  }),
  { name: 'jds-ripple' }
);
