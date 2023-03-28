import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';
import type { RangeSliderProps } from './RangeSlider';

export const RangeSliderRoot = styled('div', {
  label: 'range-slider',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: props.width ? props.width : '100%',
  marginTop: props.theme.spacing[28]
}));

export const RangeSiderInput = styled('input', {
  label: 'range-slider-input',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps & { position: 'min' | 'max'; }>((props) => ({
  position: 'absolute',
  pointerEvents: 'none',
  opacity: 0,
  appearance: 'none',
  width: '100%',
  borderRadius: '500px',
  backgroundColor: props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.3),
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
    pointerEvents: 'all',
    borderRadius: '0px',
    border: '0 none',
    cursor: 'grab',
    width: '1.2rem',
    height: '1.2rem',
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

  ...(props.position === 'min' && {
    '&:not(:active) ~div [data-box-id="valueBoxMin"]': {
      opacity: 0,
      bottom: 0
    }
  }),

  ...(props.position === 'max' && {
    '&:not(:active) ~div [data-box-id="valueBoxMax"]': {
      opacity: 0,
      bottom: 0
    }
  }),

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

export const RangeSliderInputWrapper = styled('div', {
  label: 'range-slider-input-wr',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'absolute',
  top: '0.375rem',
  width: '100%',

  ...(props.size === 'small' && {
    top: '0.25rem'
  }),

  ...(props.size === 'medium' && {
    top: '0.375rem'
  }),

  ...(props.size === 'large' && {
    top: '0.5rem'
  })
}));

export const RangedSliderSelectorWrapper = styled('div', {
  label: 'range-slider-selector-wr',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'relative',
  width: '100%',
  padding: `${props.theme.spacing[0]} ${props.theme.spacing[10]}`
}));

export const RangeSliderSelector = styled('div', {
  label: 'range-slider-selector',
  shouldForwardProp: shouldForwardPropDefault
})({
  position: 'relative',
  width: '100%'
});

export const RangeSliderValueBox = styled('div', {
  label: 'range-slider-valueBox',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'absolute',
  cursor: 'default',
  left: '50%',
  height: '2rem',
  padding: props.theme.spacing[4],
  bottom: '1.2rem',
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

export const RangeSliderControlWrapper = styled('div', {
  label: 'range-slider-control-wr',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'relative',
  width: '100%',
  height: '20px',

  ...(props.size === 'small' && {
    '& [data-control-id="controlMin"]': {
      marginLeft: '-0.437rem'
    },
    '& [data-control-id="controlMax"]': {
      marginLeft: '-0.437rem'
    }
  }),

  ...(props.size === 'medium' && {
    '& [data-control-id="controlMin"]': {
      marginLeft: '-0.6rem'
    },
    '& [data-control-id="controlMax"]': {
      marginLeft: '-0.6rem'
    }
  }),

  ...(props.size === 'large' && {
    '& [data-control-id="controlMin"]': {
      marginLeft: '-0.7rem'
    },
    '& [data-control-id="controlMax"]': {
      marginLeft: '-0.7rem'
    }
  })
}));

export const RangeSliderControl = styled('div', {
  label: 'range-slider-control',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'absolute',
  backgroundColor: props.theme.palette[props.color || 'primary'].main,
  top: '50%',
  borderRadius: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,

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
}));

export const RangeSliderTrack = styled('div', {
  label: 'range-slider-track',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'absolute',
  width: '100%',
  top: '50%',
  transform: 'translateY(-50%)',
  borderRadius: '500px',
  background: props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.3),

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

export const RangeSliderInnerTrack = styled('div', {
  label: 'range-slider-inner-track',
  shouldForwardProp: shouldForwardPropDefault
})<RangeSliderProps>((props) => ({
  position: 'absolute',
  height: '100%',
  borderRadius: '500px',
  background: props.theme.palette[props.color || 'primary'].main
}));

export const RangeSliderLabel = styled('label', {
  label: 'range-slider-label',
  shouldForwardProp: shouldForwardPropDefault
})({
  alignSelf: 'flex-start',
  width: 'max-content'
});
