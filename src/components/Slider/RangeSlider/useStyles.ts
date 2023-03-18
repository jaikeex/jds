import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { RangeSliderProps } from './RangeSlider';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: RangeSliderProps) => ({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.width ? props.width : '100%',
          marginTop: theme.spacing.padding[28]
        }),
        inputMin: {
          '&:not(:active) ~$selector [id*="valueBoxMin"]': {
            opacity: 0,
            bottom: 0
          }
        },
        inputMax: {
          '&:not(:active) ~$selector [id*="valueBoxMax"]': {
            opacity: 0,
            bottom: 0
          }
        },
        input: (props: RangeSliderProps) => ({
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0,
          appearance: 'none',
          width: '100%',
          borderRadius: '500px',
          backgroundColor: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.3),
          zIndex: 5,
          '&::-ms-track': {
            appearance: 'none',
            background: 'transparent',
            border: 'transparent'
          },
          ':-moz-range-track': {
            appearance: 'none',
            background: 'transparent',
            border: 'transparent'
          },
          '&:focus::-webkit-slider-runnable-track': {
            appearance: 'none',
            background: 'transparent',
            border: 'transparent'
          },
          '&::-webkit-slider-thumb': {
            appearance: 'none',
            pointerEvents: 'all',
            borderRadius: '0px',
            border: '0 none',
            cursor: 'grab',
            width: '1.2rem',
            height: '1.2rem',

            '&:active': {
              cursor: 'grabbing'
            }
          },
          '&::-moz-range-thumb': {
            appearance: 'none',
            pointerEvents: 'all',
            borderRadius: '0px',
            border: '0 none',
            cursor: 'grab',
            width: '1.2rem',
            height: '1.2rem',
            '&:active': {
              cursor: 'grabbing'
            }
          }
        }),
        inputWrapper: {
          position: 'absolute',
          top: '0.375rem',
          width: '100%'
        },
        selector: (props: RangeSliderProps) => ({
          position: 'relative',
          width: '100%',
          padding: [theme.spacing.padding[0], theme.spacing.padding[10]]
        }),
        selectorWrapper: {
          position: 'relative',
          width: '100%'
        },
        control: (props: RangeSliderProps) => ({
          position: 'absolute',
          backgroundColor: theme.palette[props.color || 'primary'].main,
          top: '50%',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2
        }),
        controlWrapper: {
          position: 'relative',
          width: '100%',
          height: '20px'
        },
        track: (props: RangeSliderProps) => ({
          position: 'absolute',
          width: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderRadius: '500px',
          background: theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.3)
        }),
        innerTrack: (props: RangeSliderProps) => ({
          position: 'absolute',
          height: '100%',
          borderRadius: '500px',
          background: theme.palette[props.color || 'primary'].main
        }),
        valueBox: (props: RangeSliderProps) => ({
          position: 'absolute',
          cursor: 'default',
          left: '50%',
          height: '2rem',
          padding: theme.spacing.padding[4],
          bottom: '1.2rem',
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
          '& $input, & $track': {
            height: '0.25rem'
          },
          '& $inputWrapper': {
            top: '0.25rem'
          },
          '& $input::-webkit-slider-thumb': {
            width: '0.875rem',
            height: '0.875rem'
          },
          '& $input::-moz-range-thumb': {
            width: '0.875rem',
            height: '0.875rem'
          },
          '& $control': {
            width: '0.875rem',
            height: '0.875rem'
          },
          '& [id*="controlMin"]': {
            marginLeft: '-0.437rem'
          },
          '& [id*="controlMax"]': {
            marginLeft: '-0.437rem'
          }
        },
        medium: {
          '& $input, & $track': {
            height: '0.375rem'
          },
          '& $input::-webkit-slider-thumb': {
            width: '1.2rem',
            height: '1.2rem'
          },
          '& $input::-moz-range-thumb': {
            width: '1.2rem',
            height: '1.2rem'
          },
          '& $inputWrapper': {
            top: '0.375rem'
          },
          '& $control': {
            width: '1.2rem',
            height: '1.2rem'
          },
          '& [id*="controlMin"]': {
            marginLeft: '-0.6rem'
          },
          '& [id*="controlMax"]': {
            marginLeft: '-0.6rem'
          }
        },
        large: {
          '& $input, & $track': {
            height: '0.5rem'
          },
          '& $inputWrapper': {
            top: '0.0.5rem'
          },
          '& $input::-webkit-slider-thumb': {
            width: '1.4rem',
            height: '1.4rem'
          },
          '& $input::-moz-range-thumb': {
            width: '1.4rem',
            height: '1.4rem'
          },
          '& $control': {
            width: '1.4rem',
            height: '1.4rem'
          },
          '& [id*="controlMin"]': {
            marginLeft: '-0.7rem'
          },
          '& [id*="controlMax"]': {
            marginLeft: '-0.7rem'
          }
        }
      },
      theme.overrides?.RangeSlider || {}
    ),
  {
    name: 'jds-slider'
  }
);
