import React from 'react';
import './styles.scss';

export interface CardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  styles?: React.CSSProperties;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title = '',
  subtitle = '',
  leftAction,
  rightAction,
  styles
}) => {
  return (
    <div className="jds-card__header" style={styles}>
      {leftAction && (
        <div className="jds-card__header-action jds-card__header-action--left">
          {leftAction}
        </div>
      )}
      {(title || subtitle) && (
        <div className="jds-card__title-box">
          {title && <div className="jds-card__title">{title}</div>}
          {subtitle && <div className="jds-card__sub-title">{subtitle}</div>}
        </div>
      )}
      {rightAction && (
        <div className="jds-card__header-action jds-card__header-action--right">
          {rightAction}
        </div>
      )}
    </div>
  );
};

export default CardHeader;
