import * as React from 'react';
import type { ButtonProps } from 'components/Button';
import type { ButtonAppearance } from 'components/Button';
import type { Size, ThemeColorVariants } from 'core/types';

export const useStyledChildren = (
  children: React.ReactNode,
  size: Size,
  color: ThemeColorVariants,
  disabled: boolean,
  appearance: ButtonAppearance
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
                disabled: child.props.disabled ? child.props.disabled : disabled
              })
            );
          } else if (index === children.length - 1) {
            styledChildrenArray.push(
              React.cloneElement(child, {
                size: size,
                appearance: appearance,
                color: child.props.color ? child.props.color : color,
                disabled: child.props.disabled ? child.props.disabled : disabled
              })
            );
          } else {
            styledChildrenArray.push(
              React.cloneElement(child, {
                size: size,
                appearance: appearance,
                color: child.props.color ? child.props.color : color,
                disabled: child.props.disabled ? child.props.disabled : disabled
              })
            );
          }
        }
      });
      return styledChildrenArray;
    }
  }, [children, color, size, appearance]);

  return styledChildren;
};
