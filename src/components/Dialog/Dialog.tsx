import React, { useCallback, useEffect } from 'react';
import type { SheetProps } from 'components/Sheet';
import type { NumericRange } from 'core/types';
import * as Styled from './styles';

export interface DialogProps extends React.PropsWithChildren, React.ComponentProps<'div'> {
  /**
   * Number between 0 and 10 indicating the opacity of dialog backdrop (larger is darker).
   */
  backdropLevel?: NumericRange<0, 10>;
  /**
   * Css class passed to the root component.
   */
  className?: string;
  /**
   * If true, the dialog cannot be closed by clicking outside of it.
   */
  disableBackdropClickClose?: boolean;
  /**
   * If true, the dialog cannot be closed by pressing the Escape key.
   */
  disableEscapeKeyClose?: boolean;
  /**
   * If true, the dialog will fill the full screen.
   */
  fullscreen?: boolean;
  /**
   * Function called when the dialog backdrop is clicked.
   * @param event MouseEvent
   * @returns void
   */
  onBackdropClick?: (event: MouseEvent) => void;
  /**
   * Function called when the dialog is closed.
   * @param event MouseEvent | KeyboardEvent
   * @returns void
   */
  onClose?: (event?: MouseEvent | KeyboardEvent) => void;
  /**
   * Function called when the dialog opens.
   * @returns void
   */
  onOpen?: () => void;
  /**
   * This prop controls whether the dialog is displayed or not.
   */
  open?: boolean;
  /**
   * Props passed to the Sheet surface on which the content is displayed.
   */
  sheetProps?: SheetProps;
}

const Dialog: React.FC<DialogProps> = ({
  backdropLevel = 6,
  className = '',
  children = null,
  disableBackdropClickClose = false,
  disableEscapeKeyClose = false,
  fullscreen = false,
  onBackdropClick = () => {},
  onClose = () => {},
  onOpen = () => {},
  open = false,
  sheetProps = {},
  ...props
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
        <div style={{ zIndex: 2000 }} className={className} {...props}>
          <Styled.DialogSheet {...sheetProps} style={getSheetStyles()}>
            {children}
          </Styled.DialogSheet>
        </div>
      </Styled.DialogBackdrop>
    </React.Fragment>
  );
};

export default Dialog;
