import * as React from 'react';
import type { ToggleButtonProps } from 'components/ToggleButton';
import type { Classes } from 'jss';
import type { ToggleButtonGroupClassKey } from './types';

export const useChildrenWithProps = (
  children: React.ReactElement | React.ReactElement[] | null,
  removeBorder: boolean,
  changeHandler: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void,
  isChildActive: (value?: string) => boolean,
  classNames: Classes<ToggleButtonGroupClassKey>,
  props: ToggleButtonProps
) => {
  const styledChildren = React.useMemo(() => {
    if (!Array.isArray(children)) {
      return children;
    }

    const childrenWithProps: React.ReactNode[] = [];
    React.Children.forEach(children, (child: React.ReactElement<ToggleButtonProps>, index) => {
      if (!React.isValidElement(child)) {
        return;
      }
      if (index === 0) {
        childrenWithProps.push(
          React.cloneElement(child, {
            size: props.size,
            removeBorder: removeBorder,
            color: child.props.color ? child.props.color : props.color,
            disabled: child.props.disabled ? child.props.disabled : props.disabled,
            onClick: changeHandler,
            selected: child.props.selected === undefined ? isChildActive(child.props.value) : child.props.selected,
            className: classNames.firstElement
          })
        );
      } else if (index === children.length - 1) {
        childrenWithProps.push(
          React.cloneElement(child, {
            size: props.size,
            removeBorder: removeBorder,
            color: child.props.color ? child.props.color : props.color,
            disabled: child.props.disabled ? child.props.disabled : props.disabled,
            onClick: changeHandler,
            selected: child.props.selected === undefined ? isChildActive(child.props.value) : child.props.selected,
            className: classNames.lastElement
          })
        );
      } else {
        childrenWithProps.push(
          React.cloneElement(child, {
            size: props.size,
            removeBorder: removeBorder,
            color: child.props.color ? child.props.color : props.color,
            disabled: child.props.disabled ? child.props.disabled : props.disabled,
            onClick: changeHandler,
            selected: child.props.selected === undefined ? isChildActive(child.props.value) : child.props.selected,
            className: classNames.midElement
          })
        );
      }
    });
    return childrenWithProps;
  }, [children, removeBorder, classNames, props.color, props.size, props.disabled, isChildActive, changeHandler]);

  return styledChildren;
};