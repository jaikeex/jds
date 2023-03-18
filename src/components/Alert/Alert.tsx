import React, { useCallback, useEffect, useRef } from 'react';
import { IconButton } from 'components/IconButton';
import { CheckmarkCircleIcon, CloseIcon, ErrorIconOutlined, WarningIconOutlined } from 'components/icons';
import { useAlertTimers } from './useAlertTimers';
import type { ThemeColorVariants } from 'core/types';
import { useStyles } from './useStyles';
import type { AlertClassKey } from './types';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import clsx from 'clsx';
import { Typography } from 'components/Typography';

export interface AlertProps extends React.PropsWithChildren {
  action?: React.ReactNode;
  autoHide?: boolean;
  autoHideDuration?: number;
  classes?: Classes<AlertClassKey>;
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
  classes = undefined,
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
  const classNames = classes ? mergeClasses(useStyles({ color }), classes) : useStyles({ color });
  console.log(color);
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

    return <div className={classNames.icon}>{iconElement}</div>;
  }, [icon, color, classNames]);

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
        <div
          ref={ref}
          id={id}
          style={style}
          className={clsx(classNames.root, className)}
          onMouseEnter={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {!children && (
            <React.Fragment>
              <div className={classNames.info}>
                {getDisplayedIcon()}
                <div>
                  {title && (
                    <Typography variant="h5" className={classNames.message}>
                      {title}
                    </Typography>
                  )}
                  {message && (
                    <Typography hyphens className={classNames.message}>
                      {message}
                    </Typography>
                  )}
                </div>
                {displayCloseButton && (
                  <IconButton onClick={closeButtonClickHandler} size="medium" className={classNames.closeBtn}>
                    <CloseIcon size={24} />
                  </IconButton>
                )}
              </div>
              {action && <div className={classNames.action}>{action}</div>}
            </React.Fragment>
          )}
          {children}
        </div>
      )}
    </React.Fragment>
  );
};

export default Alert;
