import React, { useCallback, useEffect } from 'react';
import type { SheetProps } from 'components/Sheet';
import type { NumericRange } from 'core/types';
import * as Styled from './styles';

export interface DialogProps extends React.PropsWithChildren {
  backdropLevel?: NumericRange<0, 10>;
  className?: string;
  disableBackdropClickClose?: boolean;
  disableEscapeKeyClose?: boolean;
  fullscreen?: boolean;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  onBackdropClick?: (event: MouseEvent) => void;
  onClose?: (event?: MouseEvent | KeyboardEvent) => void;
  onOpen?: () => void;
  open?: boolean;
  sheetProps?: SheetProps;
}

const Dialog: React.FC<DialogProps> = ({
  backdropLevel = 6,
  className = '',
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
    (event: MouseEvent) => {
      event.stopPropagation();
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
      <Styled.DialogBackdrop visible={open} level={backdropLevel} onClick={backdropClickHandler}>
        <div style={{ zIndex: 2000 }} className={className}>
          <Styled.DialogSheet {...sheetProps} style={getSheetStyles()}>
            {children}
          </Styled.DialogSheet>
        </div>
      </Styled.DialogBackdrop>
    </React.Fragment>
  );
};

export default Dialog;
