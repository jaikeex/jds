import React, { useEffect, useRef } from 'react';
import './styles.scss';
import classNames from 'classnames';
import IconButton from '../IconButton';
import { CheckmarkCircleIcon, CloseIcon, WarningIcon } from '../icons';
import { AlertAppearance, AlertLocation } from './types';
import { useAlertTimers } from './useAlertTimers';

export interface AlertProps {
  autoCloseDuration?: number;
  resumeHideDuration?: number;
  closable?: boolean;
  message?: string;
  action?: React.ReactNode;
  appearance?:
    | 'default'
    | 'warning'
    | 'success'
    | 'danger'
    | 'accented'
    | 'dark'
    | 'focus';
  location?: AlertLocation;
  icon?: React.ReactElement;
  onClose?: () => void;
  onOpen?: () => void;
  styles?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  autoCloseDuration = 4000,
  resumeHideDuration = 1500,
  closable = true,
  message = '',
  appearance = 'default',
  location = { horizontal: 'right', vertical: 'bottom' },
  className = '',
  id = '',
  onClose = () => {},
  onOpen = () => {},
  icon,
  action,
  styles,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isVisible, closeAlert, stopClose } = useAlertTimers(
    ref,
    location,
    autoCloseDuration
  );

  const classes = classNames(
    'jds-alert',
    `jds-alert--${location.horizontal}`,
    `jds-alert--${location.vertical}`,
    `jds-alert--${appearance}`,
    className
  );

  const getDisplayedMessageIcon = () => {
    if (icon) {
      return React.cloneElement(icon, {
        size: 'small',
        color: appearance === 'default' ? 'default' : 'white'
      });
    }

    switch (appearance) {
      case 'success':
        return <CheckmarkCircleIcon size="small" color="white" />;
      case 'danger':
        return <WarningIcon size="small" color="white" />;
      default:
        return null;
    }
  };

  const closeButtonClickHandler = () => {
    closeAlert(50);
  };

  const mouseOverHandler = () => {
    stopClose();
  };

  const mouseLeaveHandler = () => {
    closeAlert(resumeHideDuration);
  };

  useEffect(() => {
    isVisible ? onOpen() : onClose();
  }, [isVisible]);

  return (
    <React.Fragment>
      {isVisible && (
        <div
          ref={ref}
          id={id}
          style={styles}
          className={classes}
          onMouseEnter={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {!children && (
            <React.Fragment>
              <div className="jds-alert__info">
                {message && (
                  <span className="jds-alert__message">
                    {getDisplayedMessageIcon()}
                    {message}
                  </span>
                )}
                {closable && (
                  <IconButton
                    onClick={closeButtonClickHandler}
                    size="small"
                    className="jds-alert__close-btn"
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </div>
              <div className="jds-alert__action">{action}</div>
            </React.Fragment>
          )}
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default Alert;
