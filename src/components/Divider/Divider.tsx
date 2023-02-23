import React from 'react';
import './Divider.styles.scss';
import { ColorVariants } from '@core/types';
import classNames from 'classnames';

export interface DividerProps {
  className?: string;
  color?: ColorVariants;
  component?: keyof JSX.IntrinsicElements;
  flexItem?: boolean;
  lineStrength?: string | number;
  removeMargin?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
  className = '',
  color = 'default',
  component = 'div',
  flexItem = false,
  lineStrength = 1,
  removeMargin = false,
  orientation = 'horizontal'
}) => {
  const Component = component;

  const classes = classNames(
    'jds-divider',
    `jds-divider--color--${color}`,
    `jds-divider--${orientation}`,
    className,
    {
      'jds-divider--flex': flexItem,
      'jds-divider--no-margin': removeMargin
    }
  );

  const styles = () => {
    const styles: React.CSSProperties = {};
    if (orientation === 'horizontal') {
      styles.height =
        typeof lineStrength === 'string' ? lineStrength : `${lineStrength}px`;
    }
    if (orientation === 'vertical') {
      styles.width =
        typeof lineStrength === 'string' ? lineStrength : `${lineStrength}px`;
    }

    return styles;
  };

  return (
    <Component className={classes}>
      <hr style={styles()} />
    </Component>
  );
};

export default Divider;
