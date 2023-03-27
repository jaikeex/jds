import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';
import type { AccordionProps } from './Accordion';

export const AccordionRoot = styled('div', {
  label: 'accordion',
  shouldForwardProp: shouldForwardPropDefault
})<AccordionProps>((props) => ({
  width: '100%',
  margin: 0,
  borderRadius: props.sharpCorners ? 0 : props.theme.shape.borderRadius.small,
  backgroundColor: props.theme.palette.background.sheet,
  border: `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}`,
  boxShadow: `0 1px 1px ${props.theme.palette.rgba(props.theme.palette.common.black, 0.2)}`,
  transition: 'height 1s',
  overflow: 'hidden',

  ...(props.expanded && {
    margin: props.removeGutter ? 0 : `${props.theme.spacing[4]} 0`
  })
}));

export const AccordionHeader = styled('div', {
  label: 'accordion-header',
  shouldForwardProp: shouldForwardPropDefault
})<AccordionProps>((props) => ({
  cursor: props.disabled ? 'default' : 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing[4],
  height: '3rem',
  padding: `0 ${props.theme.spacing[8]}`,

  ...(props.disabled && {
    '*': {
      color: `${props.theme.palette.rgba(props.theme.palette.text.disabled, 0.8)} !important`
    },
    'svg': {
      fill: props.theme.palette.rgba(props.theme.palette.text.disabled, 0.8)
    }
  })
}));

export const AccordionContent = styled('div', {
  label: 'accordion-content',
  shouldForwardProp: shouldForwardPropDefault
})<AccordionProps & { height: number; }>((props) => ({
  overflow: 'hidden',
  transition: 'all 0.2s ease-out',
  height: 0,
  opacity: 0,
  padding: `0 ${props.theme.spacing[8]}`,

  ...(props.expanded && {
    padding: `${props.theme.spacing[8]} ${props.theme.spacing[8]}`,
    height: props.height + 32,
    opacity: 1
  })
}));

export const AccordionExpandIcon = styled('div', {
  label: 'accordion-expand-icon',
  shouldForwardProp: shouldForwardPropDefault
})({
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
