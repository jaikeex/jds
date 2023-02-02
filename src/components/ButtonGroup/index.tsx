import React from 'react';
import './styles.scss';
import { useButtonGroupStyles } from './useButtonGroupStyles';
import classNames from 'classnames';
import { ButtonAppearance, ButtonSize } from '@/core/types';

export interface ButtonGroupProps {
  size?: ButtonSize;
  orientation?: 'horizontal' | 'vertical';
  appearance?: ButtonAppearance;
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = 'medium',
  orientation = 'horizontal',
  appearance = 'filled',
  className = '',
  children
}) => {
  const { styleFirstElement, styleMiddleElement, styleLastElement } =
    useButtonGroupStyles(orientation, appearance);

  const classes = classNames(
    'jds-btn-group',
    `jds-btn-group--${orientation}`,
    className
  );

  const getContent = () => {
    if (Array.isArray(children)) {
      return children.map((btn, index) => {
        if (index === 0) {
          return React.cloneElement(btn, {
            size: size,
            appearance: appearance,
            styles: { ...btn.props.styles, ...styleFirstElement }
          });
        } else if (index === children.length - 1) {
          return React.cloneElement(btn, {
            size: size,
            appearance: appearance,
            styles: { ...btn.props.styles, ...styleLastElement }
          });
        } else {
          return React.cloneElement(btn, {
            size: size,
            appearance: appearance,
            styles: { ...btn.props.styles, ...styleMiddleElement }
          });
        }
      });
    } else return children;
  };

  return <div className={classes}>{getContent()}</div>;
};

export default ButtonGroup;
