import React, { useCallback, useEffect, useRef } from 'react';
import { CheckmarkCircleIcon, CloseIcon, ErrorIconOutlined, WarningIconOutlined } from 'components/icons';
import { useAlertTimers } from './useAlertTimers';
import type { ThemeColorVariants } from 'core/types';
import * as Styled from './styles';

export interface AlertProps extends React.PropsWithChildren {
  action?: React.ReactNode;
  autoHide?: boolean;
  autoHideDuration?: number;
  className?: string;
  color?: ThemeColorVariants;
  displayCloseButton?: boolean;
  icon?: React.ReactElement;
  id?: string;
  message?: string;
  onClose?: () => void;
  onOpen?: () => void;
  resumeHideDuration?: number;
  style?: React.CSSProperties;
  title?: string;
}

const Alert: React.FC<AlertProps> = ({
  action = null,
  autoHide = true,
  autoHideDuration = 4000,
  children = null,
  className = '',
  color = 'primary',
  displayCloseButton = true,
  icon = null,
  id = '',
  message = '',
  onClose = () => {},
  onOpen = () => {},
  resumeHideDuration = 1500,
  style = {},
  title = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, closeAlert, stopClose } = useAlertTimers(ref, autoHide, autoHideDuration);
  const getDisplayedIcon = useCallback(() => {
    let iconElement: React.ReactNode = null;

    if (icon) {
      iconElement = React.cloneElement(icon, { size: 24 });
    } else {
      switch (color) {
        case 'success':
          iconElement = <CheckmarkCircleIcon size={24} />;
          break;
        case 'warning':
          iconElement = <WarningIconOutlined size={24} />;
          break;
        case 'error':
          iconElement = <ErrorIconOutlined size={24} />;
          break;
        default:
          return null;
      }
    }

    return <Styled.AlertIcon>{iconElement}</Styled.AlertIcon>;
  }, [icon, color]);

  const closeButtonClickHandler = useCallback(() => {
    closeAlert(0);
  }, [closeAlert]);

  const mouseOverHandler = useCallback(() => {
    stopClose();
  }, [stopClose]);

  const mouseLeaveHandler = useCallback(() => {
    autoHide && closeAlert(resumeHideDuration);
  }, [closeAlert, resumeHideDuration]);

  useEffect(() => {
    isVisible ? onOpen() : onClose();
  }, [isVisible]);

  return (
    <React.Fragment>
      {isVisible && (
        <Styled.Alert
          color={color}
          ref={ref}
          id={id}
          style={style}
          className={className}
          onMouseEnter={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {!children && (
            <React.Fragment>
              <Styled.AlertInfo>
                {getDisplayedIcon()}
                <div>
                  {title && (
                    <Styled.AlertMessage color={color} variant="h5">
                      {title}
                    </Styled.AlertMessage>
                  )}
                  {message && (
                    <Styled.AlertMessage color={color} hyphens>
                      {message}
                    </Styled.AlertMessage>
                  )}
                </div>
                {displayCloseButton && (
                  <Styled.AlertCloseButton color={color} onClick={closeButtonClickHandler} size="medium">
                    <CloseIcon size={24} />
                  </Styled.AlertCloseButton>
                )}
              </Styled.AlertInfo>
              {action && <Styled.AlertAction>{action}</Styled.AlertAction>}
            </React.Fragment>
          )}
          {children}
        </Styled.Alert>
      )}
    </React.Fragment>
  );
};

export default Alert;
