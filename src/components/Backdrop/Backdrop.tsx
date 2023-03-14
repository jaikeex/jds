import * as React from 'react';
import type { NumericRange } from 'core/types';
import type { BackdropClassKey } from './types';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import type { Classes } from 'jss';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { OutsideClickListener } from 'components/OutsideClickListener';

export interface BackdropProps extends React.PropsWithChildren {
  classes?: Classes<BackdropClassKey>;
  className?: string;
  level?: NumericRange<0, 10>;
  onClick?: (event: MouseEvent) => void;
  visible?: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({
  children = null,
  classes = {},
  className = '',
  level = 6,
  onClick = () => {},
  visible = false
}): JSX.Element => {
  const classNames = mergeClasses(useStyles({ level }), classes);

  return (
    <React.Fragment>
      {visible &&
        createPortal(
          <div className={clsx(classNames.root, className)}>
            <OutsideClickListener onOutsideClick={onClick}>{children}</OutsideClickListener>
          </div>,
          document.body
        )}
    </React.Fragment>
  );
};

export default Backdrop;
