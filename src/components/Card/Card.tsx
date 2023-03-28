import React, { useCallback } from 'react';
import type { CardAppearance } from './types';

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
  onClick = () => {},
  style,
  backside,
  children
}) => {
  // const rootClasses = classNames('jds-card');

  // const frontSideClasses = classNames('jds-card__side', `jds-card__side--${appearance}`, {
  //   'jds-card__side--sharp': sharpCorners,
  //   'jds-card__side--shadow': hasShadow,
  //   'jds-card__side--clickable': clickable && !backside,
  //   'jds-card__side--front': backside
  // });
  // const backSideClasses = classNames('jds-card__side', {
  //   'jds-card__side--back': backside
  // });

  const cardClickHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      clickable && onClick(event);
    },
    [clickable, onClick]
  );

  return (
    <React.Fragment>
      <div>
        <div style={style} onClick={cardClickHandler}>
          {children}
        </div>
        {backside && <div style={style}>{backside}</div>}
      </div>
    </React.Fragment>
  );
};

export default Card;
