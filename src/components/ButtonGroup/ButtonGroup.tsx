import React from 'react';
import './ButtonGroup.styles.scss';
import { useButtonGroupStyles } from './useButtonGroupStyles';
import classNames from 'classnames';
import type { ButtonAppearance, ButtonSize } from 'components/Button';

export interface ButtonGroupProps {
  size?: ButtonSize;
  orientation?: 'horizontal' | 'vertical';
  appearance?: ButtonAppearance;
  style?: React.CSSProperties;
  children?: React.ReactElement | React.ReactElement[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = 'medium',
  orientation = 'horizontal',
  appearance = 'filled',
  style,
  children
}) => {
  const { styleFirstElement, styleMiddleElement, styleLastElement } = useButtonGroupStyles(orientation, appearance);

  const classes = classNames('jds-btn-group', `jds-btn-group--${orientation}`);

  //TODO: use React.children
  const getContent = () => {
    if (Array.isArray(children)) {
      return children.map((btn, index) => {
        if (index === 0) {
          return React.cloneElement(btn, {
            size: size,
            appearance: appearance,
            style: { ...btn.props.styles, ...styleFirstElement }
          });
        } else if (index === children.length - 1) {
          return React.cloneElement(btn, {
            size: size,
            appearance: appearance,
            style: { ...btn.props.styles, ...styleLastElement }
          });
        } else {
          return React.cloneElement(btn, {
            size: size,
            appearance: appearance,
            style: { ...btn.props.styles, ...styleMiddleElement }
          });
        }
      });
    } else return children;
  };

  return (
    <div className={classes} style={style}>
      {getContent()}
    </div>
  );
};

export default ButtonGroup;
