import React, { useCallback, useEffect } from 'react';
import { CheckmarkCircleIcon, CloseIcon, ErrorIconOutlined, WarningIconOutlined } from 'components/icons';
import { useSnackbarTimers } from './useSnackbarTimers';
import type { ThemeColorVariants } from 'core/types';
import * as Styled from './styles';
import { useForwardedRef } from 'core/hooks';
import { makeId } from 'core/utils';

export interface SnackbarProps extends Omit<React.ComponentProps<'div'>, 'ref'> {
  /**
   * Component displayed below the snackbar message.
   */
  action?: React.ReactNode;
  /**
   * If true, the snackbar will not disappear automatically.
   */
  disableAutoHide?: boolean;
  /**
   * Time in ms after which the snackbar disappears on its own. Has no effect if disableAutoHide is set to true.
   */
  autoHideDuration?: number;
  /**
   * Css class passed to the root component.
   */
  className?: string;
  /**
   * Color of the snackbar. Can be any of the theme colors or a default variant.
   */
  color?: ThemeColorVariants;
  /**
   * If true, the manual close button will be hidden.
   */
  hideCloseButton?: boolean;
  /**
   * Icon component displayed in front of the snackbar message.
   */
  icon?: React.ReactElement;
  /**
   * Id of the component.
   */
  id?: string;
  /**
   * Message displayed in the snackbar.
   */
  message?: string;
  /**
   * Function called when the snackbar disappears.
   * @returns void
   */
  onClose?: () => void;
  /**
   * Function called when the snackbar opens.
   * @returns void
   */
  onOpen?: () => void;
  /**
   * Time in ms after which the snackbar disappears when hovered out of. Has no effect if disableAutoHide is set to true.
   */
  resumeHideDuration?: number;
}

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      action = null,
      disableAutoHide = false,
      autoHideDuration = 4000,
      className = '',
      color = 'primary',
      hideCloseButton = false,
      icon = null,
      id = '',
      message = '',
      onClose = () => {},
      onOpen = () => {},
      resumeHideDuration = 1500,
      style = {}
    },
    ref
  ) => {
    const innerRef = useForwardedRef<HTMLDivElement>(ref);

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const { isVisible, closeAlert, stopClose } = useSnackbarTimers(id, disableAutoHide, autoHideDuration);

    const getDisplayedIcon = useCallback(() => {
      let iconElement: React.ReactNode = null;

      if (icon) {
        iconElement = React.cloneElement(icon, { size: 20 });
      } else {
        switch (color) {
          case 'success':
            iconElement = <CheckmarkCircleIcon size={20} />;
            break;
          case 'warning':
            iconElement = <WarningIconOutlined size={20} />;
            break;
          case 'error':
            iconElement = <ErrorIconOutlined size={20} />;
            break;
          default:
            return null;
        }
      }

      return <Styled.SnackbarIcon>{iconElement}</Styled.SnackbarIcon>;
    }, [icon, color]);

    const closeButtonClickHandler = useCallback(() => {
      closeAlert(0);
    }, [closeAlert]);

    const mouseOverHandler = useCallback(() => {
      stopClose();
    }, [stopClose]);

    const mouseLeaveHandler = useCallback(() => {
      !disableAutoHide && closeAlert(resumeHideDuration);
    }, [closeAlert, resumeHideDuration]);

    useEffect(() => {
      isVisible ? onOpen() : onClose();
    }, [isVisible]);

    return (
      <React.Fragment>
        {isVisible && (
          <Styled.Snackbar
            color={color}
            ref={innerRef}
            id={id}
            style={style}
            className={className}
            onMouseEnter={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Styled.SnackbarInfo>
              {getDisplayedIcon()}
              {message && (
                <Styled.SnackbarMessage color={color} variant="body2" hyphens>
                  {message}
                </Styled.SnackbarMessage>
              )}
              {!hideCloseButton && (
                <Styled.SnackbarCloseButton color={color} onClick={closeButtonClickHandler} size="small">
                  <CloseIcon />
                </Styled.SnackbarCloseButton>
              )}
            </Styled.SnackbarInfo>
            {action && <Styled.SnackbarAction>{action}</Styled.SnackbarAction>}
          </Styled.Snackbar>
        )}
      </React.Fragment>
    );
  }
);

Snackbar.displayName = 'Snackbar';
export default Snackbar;
