import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { SliderProps } from './Slider';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: SliderProps) => ({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.width ? props.width : '100%',
          padding: [
            theme.spacing.padding[28],
            theme.spacing.padding[0],
            theme.spacing.padding[0],
            theme.spacing.padding[0]
          ],
          '&:not(:active) $valueBox': {
            opacity: 0,
            bottom: 0
          }
        }),
        input: (props: SliderProps) => ({
          appearance: 'none',
          width: '100%',
          borderRadius: '500px',
          backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.3),
          backgroundImage: `linear-gradient(
          ${theme.palette[props.color || 'primary'].main},
          ${theme.palette[props.color || 'primary'].main})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50% 100%',
          zIndex: 5,
          '&::-webkit-slider-thumb': {
            appearance: 'none',
            backgroundColor: theme.palette[props.color || 'primary'].main,
            borderRadius: '50%',
            cursor: 'grab',
            transition: 'background-color 0.1s',
            '&:hover': {
              backgroundColor: theme.palette.common.white,
              border: {
                width: '4px',
                style: 'solid',
                color: theme.palette[props.color || 'primary'].main
              }
            },
            '&:active': {
              cursor: 'grabbing'
            }
          },
          '&::-moz-range-thumb': {
            appearance: 'none',
            backgroundColor: theme.palette[props.color || 'primary'].main,
            borderRadius: '50%',
            cursor: 'grab',
            transition: 'all 0.1s',
            '&:hover': {
              backgroundColor: theme.palette.common.white,
              border: {
                width: '4px',
                style: 'solid',
                color: theme.palette[props.color || 'primary'].main
              }
            },
            '&:active': {
              cursor: 'grabbing'
            }
          }
        }),
        selector: (props: SliderProps) => ({
          position: 'relative',
          width: '100%',
          padding: [theme.spacing.padding[0], theme.spacing.padding[10]]
        }),
        selectorWrapper: {
          position: 'relative',
          width: '100%'
        },
        valueBox: (props: SliderProps) => ({
          position: 'absolute',
          left: '50%',
          height: '2rem',
          padding: theme.spacing.padding[4],
          bottom: '1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.grey[700],
          color: theme.palette.common.white,
          borderRadius: theme.shape.borderRadius.small,
          transformOrigin: 'center -10px',
          transform: 'translateX(-50%)',
          transition: 'bottom 0.1s ease-in-out, opacity 0.1s ease-in-out',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginLeft: '-5px',
            border: {
              width: '5px',
              style: 'solid',
              color: [theme.palette.grey[700], 'transparent', 'transparent', 'transparent']
            }
          },
          '& span': {
            color: theme.palette.common.white
          }
        }),
        label: {
          alignSelf: 'flex-start',
          width: 'max-content'
        },
        small: {
          height: '0.25rem',
          '&::-webkit-slider-thumb': {
            width: '0.875rem',
            height: '0.875rem'
          },
          '&::-moz-range-thumb': {
            width: '0.75rem',
            height: '0.75rem'
          }
        },
        medium: {
          height: '0.375rem',
          '&::-webkit-slider-thumb': {
            width: '1.2rem',
            height: '1.2rem'
          },
          '&::-moz-range-thumb': {
            width: '1rem',
            height: '1rem'
          }
        },
        large: {
          height: '0.5rem',
          '&::-webkit-slider-thumb': {
            width: '1.4rem',
            height: '1.4rem'
          },
          '&::-moz-range-thumb': {
            width: '1.2rem',
            height: '1.2rem'
          }
        }
      },
      theme.overrides?.Slider || {}
    ),
  {
    name: 'jds-slider'
  }
);
