import React from 'react';
import './Card.styles.scss';
import classNames from 'classnames';
import { CardAppearance } from './types';

export interface CardProps {
  appearance?: CardAppearance;
  hasShadow?: boolean;
  clickable?: boolean;
  sharpCorners?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
  backside?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  appearance = 'default',
  hasShadow = false,
  clickable = false,
  sharpCorners = false,
  onClick,
  style,
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

  const cardClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    clickable && onClick && onClick(event);
  };

  console.log(backside);

  return (
    <React.Fragment>
      <div className={rootClasses}>
        <div
          className={frontSideClasses}
          style={style}
          onClick={cardClickHandler}
        >
          {children}
        </div>
        {backside && (
          <div className={backSideClasses} style={style}>
            {backside}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Card;
