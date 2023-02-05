import { ColorVariants, Position, Size } from '@core/types';
import React from 'react';
import './Checkbox.styles.scss';
import classNames from 'classnames';
import { CheckmarkIcon } from '../icons';

export interface CheckboxProps {
  size?: Size;
  color?: ColorVariants;
  label?: string;
  labelPosition?: Exclude<
    Position,
    'right-start' | 'right-end' | 'left-start' | 'left-end'
  >;
  id?: string;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({
  size = 'medium',
  color = 'default',
  label = '',
  labelPosition = 'right',
  id = '',
  style
}) => {
  const classes = classNames(
    'jds-checkbox',
    `jds-checkbox--size--${size}`,
    `jds-checkbox--size--${color}`
  );

  return (
    <div className="jds-checkbox__container">
      <input type="checkbox" className={classes} id={id} />
      <label className="jds-checkbox__label" htmlFor={id}>
        <span className="jds-checkbox__mark">
          <CheckmarkIcon size="small" color="danger" />
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
