import * as React from 'react';
import type { ToggleButtonProps } from 'components/ToggleButton';

export const useChildrenWithProps = (
  children: React.ReactElement | React.ReactElement[],
  removeBorder: boolean,
  changeHandler: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void,
  isChildActive: (value?: string) => boolean,
  props: ToggleButtonProps
) => {
  const styledChildren = React.useMemo(() => {
    if (!Array.isArray(children)) {
      return children;
    }

    return React.Children.map(children, (child: React.ReactElement<ToggleButtonProps>, index) => {
      if (!React.isValidElement(child)) {
        return;
      }
      return React.cloneElement(child, {
        size: props.size,
        removeBorder: removeBorder,
        value: child.props.value ? child.props.value : index.toString(),
        color: child.props.color ? child.props.color : props.color,
        disabled: child.props.disabled ? child.props.disabled : props.disabled,
        onClick: changeHandler,
        selected:
          child.props.selected === undefined
            ? isChildActive(child.props.value || index.toString())
            : child.props.selected
      });
    });
  }, [children, removeBorder, props.color, props.size, props.disabled, isChildActive, changeHandler]);

  return styledChildren;
};
