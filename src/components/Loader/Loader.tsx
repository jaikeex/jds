import React from 'react';
import './Loader.styles.scss';
import { Size } from '@core/types';
import classNames from 'classnames';

export interface LoaderProps {
  size?: Size;
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium' }) => {
  const classes = classNames('jds-loader', `jds-loader--size--${size}`);

  return (
    <div className={classes}>
      <div className="jds-loader__container">
        <div className="jds-loader__square jds-loader__square--top"></div>
        <div className="jds-loader__square jds-loader__square--right"></div>
        <div className="jds-loader__square jds-loader__square--left"></div>
        <div className="jds-loader__square jds-loader__square--bottom"></div>
      </div>
    </div>
  );
};

export default Loader;
