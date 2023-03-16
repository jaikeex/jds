import * as React from 'react';
import type { ButtonProps } from 'components/Button';
import type { ButtonAppearance, ButtonSize } from 'components/Button';
import type { Classes } from 'jss';
import type { ButtonGroupClassKey } from './types';
import type { ThemeColorVariants } from 'core/types';

export const useStyledChildren = (
  children: React.ReactElement | React.ReactElement[] | null,
  size: ButtonSize,
  color: ThemeColorVariants,
  disabled: boolean,
  appearance: ButtonAppearance,
  classNames: Classes<ButtonGroupClassKey>
) => {
  const styledChildren = React.useMemo(() => {
    if (!Array.isArray(children)) {
      return children;
    } else {
      const styledChildrenArray: React.ReactNode[] = [];
      React.Children.forEach(children, (child: React.ReactElement<ButtonProps>, index) => {
        if (React.isValidElement(child)) {
          if (index === 0) {
            styledChildrenArray.push(
              React.cloneElement(child, {
                size: size,
                appearance: appearance,
                color: child.props.color ? child.props.color : color,
                disabled: child.props.disabled ? child.props.disabled : disabled,
                className: classNames.firstElement
              })
            );
          } else if (index === children.length - 1) {
            styledChildrenArray.push(
              React.cloneElement(child, {
                size: size,
                appearance: appearance,
                color: child.props.color ? child.props.color : color,
                disabled: child.props.disabled ? child.props.disabled : disabled,
                className: classNames.lastElement
              })
            );
          } else {
            styledChildrenArray.push(
              React.cloneElement(child, {
                size: size,
                appearance: appearance,
                color: child.props.color ? child.props.color : color,
                disabled: child.props.disabled ? child.props.disabled : disabled,
                className: classNames.midElement
              })
            );
          }
        }
      });
      return styledChildrenArray;
    }
  }, [children, color, size, appearance, classNames]);

  return styledChildren;
};
