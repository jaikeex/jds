import styled from '@emotion/styled';
import type { SvgIconProps } from 'components/icons';
import { SvgIcon } from 'components/icons';
import { shouldForwardPropDefault } from 'core/utils';
import React from 'react';

const CenterIconRoot = styled('div', {
  label: 'radio-center',
  shouldForwardProp: shouldForwardPropDefault
})({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
});

const CenterIcon = styled(SvgIcon, { label: 'radio-center' })<RadioCenterIconProps>((props) => ({
  opacity: props.visible ? 1 : 0,
  transition: 'opacity 0.15s'
}));

export interface RadioCenterIconProps extends SvgIconProps {
  visible?: boolean;
}

const RadioCenterIcon: React.FC<RadioCenterIconProps> = ({ visible = false, ...props }): JSX.Element => (
  <CenterIconRoot>
    <CenterIcon visible={visible} viewBox="0 0 24 24" {...props}>
      <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />
      <path xmlns="http://www.w3.org/2000/svg" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
    </CenterIcon>
  </CenterIconRoot>
);

export default RadioCenterIcon;
