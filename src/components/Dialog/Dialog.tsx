import React, { useCallback, useEffect } from 'react';
import type { SheetProps } from 'components/Sheet';
import { Sheet } from 'components/Sheet';
import './Dialog.styles.scss';
import classNames from 'classnames';

export interface DialogProps extends React.PropsWithChildren {
  disableBackdropClickClose?: boolean;
  disableEscapeKeyClose?: boolean;
  fullscreen?: boolean;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  onBackdropClick?: React.MouseEventHandler<HTMLElement>;
  onClose?: (event?: React.MouseEvent | KeyboardEvent) => void;
  onOpen?: () => void;
  open?: boolean;
  sheetProps?: SheetProps;
}

const Dialog: React.FC<DialogProps> = ({
  children = null,
  disableBackdropClickClose = false,
  disableEscapeKeyClose = false,
  fullscreen = false,
  maxHeight = '90vh',
  maxWidth = '90vw',
  minHeight = 0,
  minWidth = 0,
  onBackdropClick = () => {},
  onClose = () => {},
  onOpen = () => {},
  open = false,
  sheetProps = {}
}) => {
  const sheetClasses = classNames(sheetProps.className, 'jds-dialog__sheet');

  const getSheetStyles = () => {
    const styles: React.CSSProperties = {
      ...sheetProps.style
    };

    if (fullscreen) {
      styles.height = '100vh';
      styles.width = '100vw';

      return styles;
    }

    styles.maxHeight = typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`;
    styles.maxWidth = typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`;
    styles.minHeight = typeof minHeight === 'string' ? minHeight : `${minHeight}px`;
    styles.minWidth = typeof minWidth === 'string' ? minWidth : `${minWidth}px`;

    return styles;
  };

  const backdropClickHandler = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      onBackdropClick(event);
      disableBackdropClickClose || onClose(event);
    },
    [onBackdropClick, disableBackdropClickClose, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      event.key === 'Escape' && !disableEscapeKeyClose && onClose(event);
    });
  }, []);

  useEffect(() => {
    open && onOpen();
  }, [open]);

  return (
    <React.Fragment>
      {open && (
        <React.Fragment>
          <div className="jds-dialog__backdrop" onClick={backdropClickHandler} />
          <div className="jds-dialog">
            <Sheet {...sheetProps} className={sheetClasses} style={getSheetStyles()}>
              {children}
            </Sheet>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Dialog;
