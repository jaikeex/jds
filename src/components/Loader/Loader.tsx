import React from 'react';
import './Loader.styles.scss';
import { ExtendedSize } from '@core/types';
import classNames from 'classnames';
import { classNameSize } from '@core/utils';

export interface LoaderProps {
  size?: ExtendedSize;
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium' }) => {
  const classes = classNames('jds-loader', classNameSize('jds-loader', size));

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
