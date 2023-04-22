import React from 'react';
import type { NumericRange } from 'core/types';
import { createPortal } from 'react-dom';
import { OutsideClickListener } from 'components/OutsideClickListener';
import * as Styled from './styles';

export interface BackdropProps extends React.PropsWithChildren {
  className?: string;
  level?: NumericRange<0, 10>;
  onClick?: (event: MouseEvent) => void;
  visible?: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({
  children = null,
  className = '',
  level = 6,
  onClick = () => {},
  visible = false
}): JSX.Element => {
  const styleProps = {
    level
  };

  return (
    <React.Fragment>
      {visible &&
        createPortal(
          <Styled.BackdropRoot {...styleProps} className={className} data-testid="jds-backdrop">
            <OutsideClickListener onOutsideClick={onClick}>{children}</OutsideClickListener>
          </Styled.BackdropRoot>,
          document.body
        )}
    </React.Fragment>
  );
};

export default Backdrop;
