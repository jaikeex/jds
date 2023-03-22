import styled from '@emotion/styled';
import type { SliderProps } from './Slider';
import { shouldForwardPropDefault } from 'core/utils';

export const SliderRoot = styled('div', {
  label: 'slider',
  shouldForwardProp: shouldForwardPropDefault
})<SliderProps>((props) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: props.width ? props.width : '100%',
  paddingTop: `${props.theme.spacing[28]}`,
  '&:not(:active) [data-box-id="valueBox"]': {
    opacity: 0,
    bottom: 0
  }
}));

export const SliderInput = styled('input', {
  label: 'slider-input',
  shouldForwardProp: shouldForwardPropDefault
})<SliderProps>((props) => ({
  appearance: 'none',
  width: '100%',
  borderRadius: '500px',
  backgroundColor: props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.3),
  backgroundImage: `linear-gradient(
          ${props.theme.palette[props.color || 'primary'].main},
          ${props.theme.palette[props.color || 'primary'].main})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '50% 100%',
  zIndex: 5,
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    backgroundColor: props.theme.palette[props.color || 'primary'].main,
    borderRadius: '50%',
    cursor: 'grab',
    transition: 'background-color 0.1s',
    '&:hover': {
      backgroundColor: props.theme.palette.common.white,
      border: `4px solid ${props.theme.palette[props.color || 'primary'].main}`
    },
    '&:active': {
      cursor: 'grabbing'
    },

    ...(props.size === 'small' && {
      width: '0.875rem',
      height: '0.875rem'
    }),

    ...(props.size === 'medium' && {
      width: '1.2rem',
      height: '1.2rem'
    }),

    ...(props.size === 'large' && {
      width: '1.4rem',
      height: '1.4rem'
    })
  },
  '&::-moz-range-thumb': {
    appearance: 'none',
    backgroundColor: props.theme.palette[props.color || 'primary'].main,
    borderRadius: '50%',
    cursor: 'grab',
    transition: 'all 0.1s',
    '&:hover': {
      backgroundColor: props.theme.palette.common.white,
      border: `4px solid ${props.theme.palette[props.color || 'primary'].main}`
    },
    '&:active': {
      cursor: 'grabbing'
    },

    ...(props.size === 'small' && {
      width: '0.75rem',
      height: '0.75rem'
    }),

    ...(props.size === 'medium' && {
      width: '1rem',
      height: '1rem'
    }),

    ...(props.size === 'large' && {
      width: '1.2rem',
      height: '1.2rem'
    })
  },

  ...(props.size === 'small' && {
    height: '0.25rem'
  }),

  ...(props.size === 'medium' && {
    height: '0.375rem'
  }),

  ...(props.size === 'large' && {
    height: '0.5rem'
  })
}));

export const SliderSelectorWrapper = styled('div', {
  label: 'slider-selector-wr',
  shouldForwardProp: shouldForwardPropDefault
})<SliderProps>((props) => ({
  position: 'relative',
  width: '100%',
  padding: `${props.theme.spacing[0]} ${props.theme.spacing[10]}`
}));

export const SliderSelector = styled('div', {
  label: 'slider-selector',
  shouldForwardProp: shouldForwardPropDefault
})({
  position: 'relative',
  width: '100%'
});

export const SliderValueBox = styled('div', {
  label: 'slider-value-box',
  shouldForwardProp: shouldForwardPropDefault
})<SliderProps>((props) => ({
  position: 'absolute',
  left: '50%',
  height: '2rem',
  padding: props.theme.spacing[4],
  bottom: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: props.theme.palette.grey[700],
  color: props.theme.palette.common.white,
  borderRadius: props.theme.shape.borderRadius.small,
  transformOrigin: 'center -10px',
  transform: 'translateX(-50%)',
  transition: 'bottom 0.1s ease-in-out, opacity 0.1s ease-in-out',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: `5px`,
    borderStyle: 'solid',
    borderColor: `${props.theme.palette.grey[700]} transparent transparent transparent`
  },
  '& span': {
    color: props.theme.palette.common.white
  }
}));

export const SliderLabel = styled('div', {
  label: 'slider-label',
  shouldForwardProp: shouldForwardPropDefault
})({
  alignSelf: 'flex-start',
  width: 'max-content'
});
