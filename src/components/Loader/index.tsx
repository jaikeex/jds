import React from 'react';
import './styles.scss';

export interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
}

export const Loader: React.FC<LoaderProps> = ({ size = 'medium' }) => {
  const getClassName = () => {
    let className = 'jds-loader';
    className = className.concat(` jds-loader--size-${size}`);

    return className;
  };

  return (
    <div className={getClassName()}>
      <div className="jds-loader__container">
        <div className="jds-loader__square jds-loader__square--top"></div>
        <div className="jds-loader__square jds-loader__square--right"></div>
        <div className="jds-loader__square jds-loader__square--left"></div>
        <div className="jds-loader__square jds-loader__square--bottom"></div>
      </div>
    </div>
  );
};
