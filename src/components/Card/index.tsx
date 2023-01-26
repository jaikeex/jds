import React from 'react';
import './styles.scss';
import classNames from 'classnames';

export interface CardProps {
  appearance?: 'default' | 'outlined';
  hasShadow?: boolean;
  clickable?: boolean;
  sharpCorners?: boolean;
  onClick?: () => void;
  styles?: React.CSSProperties;
  backside?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  appearance = 'default',
  hasShadow = false,
  clickable = false,
  sharpCorners = false,
  onClick,
  styles,
  backside,
  children,
  ...props
}) => {
  const rootClasses = classNames('jds-card');

  const frontSideClasses = classNames(
    'jds-card__side',
    `jds-card__side--${appearance}`,
    {
      'jds-card__side--sharp': sharpCorners,
      'jds-card__side--shadow': hasShadow,
      'jds-card__side--clickable': clickable && !backside,
      'jds-card__side--front': backside
    }
  );
  const backSideClasses = classNames('jds-card__side', {
    'jds-card__side--back': backside
  });

  const cardClickHandler = () => {
    clickable && onClick && onClick();
  };

  console.log(backside);

  return (
    <React.Fragment>
      <div className={rootClasses}>
        <div
          className={frontSideClasses}
          style={styles}
          onClick={cardClickHandler}
        >
          {children}
        </div>
        {backside && (
          <div className={backSideClasses} style={styles}>
            {backside}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
