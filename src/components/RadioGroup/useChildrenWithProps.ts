import * as React from 'react';
import type { RadioProps } from 'components/Radio';

export const useChildrenWithProps = (
  children: React.ReactElement | React.ReactElement[] | null,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void,
  isChildActive: (value: string | undefined) => boolean,
  props: RadioProps
) => {
  const styledChildren = React.useMemo(() => {
    if (!Array.isArray(children)) {
      return children;
    }

    const childrenWithProps: React.ReactNode[] = [];
    React.Children.forEach(children, (child: React.ReactElement<RadioProps>, index) => {
      if (!React.isValidElement(child)) {
        return;
      }
      childrenWithProps.push(
        React.cloneElement(child, {
          key: `${index}-${child.props.value}`,
          size: child.props.size ? child.props.size : props.size,
          color: child.props.color ? child.props.color : props.color,
          disabled: child.props.disabled ? child.props.disabled : props.disabled,
          labelPosition: child.props.labelPosition ? child.props.labelPosition : props.labelPosition,
          onChange: changeHandler,
          checked: child.props.checked === undefined ? isChildActive(child.props.value) : child.props.checked
        })
      );
    });
    return childrenWithProps;
  }, [children, props, isChildActive, changeHandler]);

  return styledChildren;
};
