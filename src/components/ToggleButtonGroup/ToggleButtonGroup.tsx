import * as React from 'react';
import type { Classes } from 'jss';
import type { ToggleButtonGroupClassKey } from './types';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import { useCallback, useEffect, useState } from 'react';
import { useChildrenWithProps } from './useStyledChildren';
import clsx from 'clsx';
import isValueSelected from './isValueSelected';

export interface ToggleButtonGroupProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  classes?: Classes<ToggleButtonGroupClassKey>;
  color?: ThemeColorVariantsWithDefault;
  disabled?: boolean;
  exclusive?: boolean;
  onChange?: (value: any) => void;
  orientation?: 'horizontal' | 'vertical';
  removeBorder?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  value?: any;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children = null,
  className = '',
  classes = {},
  exclusive = false,
  onChange = () => {},
  orientation = 'horizontal',
  removeBorder = false,
  style = {},
  value = undefined,
  ...props
}): JSX.Element => {
  const [selectedValue, setselectedValue] = useState<any>(value || []);

  const classNames = mergeClasses(useStyles({ orientation, removeBorder }), classes);

  const buttonClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, value: any) => {
      setselectedValue((prevState: any) => {
        const index = prevState.indexOf(value);
        if (index >= 0) {
          const newValue = prevState.slice();
          newValue.splice(index, 1);
          return newValue;
        } else {
          return prevState ? prevState.concat(value) : [value];
        }
      });
    },
    [setselectedValue]
  );

  const buttonExclusiveClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, value: any) => {
      setselectedValue((prevState: any) => (value === prevState ? null : value));
    },
    [setselectedValue]
  );

  const isChildActive = (value: any) => isValueSelected(selectedValue, value);

  const childrenWithProps = useChildrenWithProps(
    children,
    removeBorder,
    exclusive ? buttonExclusiveClickHandler : buttonClickHandler,
    isChildActive,
    classNames,
    props
  );

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  return (
    <div className={clsx(classNames.root, className)} style={style}>
      {childrenWithProps}
    </div>
  );
};

export default ToggleButtonGroup;
