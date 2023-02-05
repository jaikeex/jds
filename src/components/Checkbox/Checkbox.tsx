import { ColorVariants, Position, Size } from '@core/types';
import React from 'react';
import './Checkbox.styles.scss';
import classNames from 'classnames';
import { CheckmarkThickIcon } from '../icons';
import { makeId } from '@core/utils';

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
  id = makeId(5),
  style
}) => {
  const classes = classNames(
    'jds-checkbox',
    `jds-checkbox--size--${size}`,
    `jds-checkbox--color--${color}`
  );

  return (
    <div className="jds-checkbox__container">
      <input type="checkbox" className={classes} id={id} />
      <label className="jds-checkbox__label" htmlFor={id}>
        <div className="jds-checkbox__mark">
          <CheckmarkThickIcon size="small" />
        </div>
        <span className="jds-checkbox__text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
