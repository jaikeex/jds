import * as React from 'react';
import type { Classes } from 'jss';
import type { ToggleButtonGroupClassKey } from './types';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import { useCallback, useEffect, useState } from 'react';
import { useChildrenWithProps } from './useChildrenWithProps';
import clsx from 'clsx';
import isValueSelected from './utils/isValueSelected';

export interface ToggleButtonGroupProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  classes?: Classes<ToggleButtonGroupClassKey>;
  color?: ThemeColorVariantsWithDefault;
  defaultValue?: any;
  disabled?: boolean;
  exclusive?: boolean;
  onChange?: (value: any) => void;
  orientation?: 'horizontal' | 'vertical';
  removeBorder?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  value?: string | string[];
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children = null,
  className = '',
  classes = {},
  defaultValue = undefined,
  exclusive = false,
  onChange = () => {},
  orientation = 'horizontal',
  removeBorder = false,
  style = {},
  value = defaultValue,
  ...props
}): JSX.Element => {
  const [selectedValue, setselectedValue] = useState<string | string[]>(value);

  const classNames = mergeClasses(useStyles({ orientation, removeBorder }), classes);

  const buttonClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
      setselectedValue((prevState) => {
        if (Array.isArray(prevState) && prevState.includes(value)) {
          return prevState.filter((val) => val !== value);
        } else {
          return prevState ? prevState.concat(value) : [value];
        }
      });
    },
    [setselectedValue]
  );

  const buttonExclusiveClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
      setselectedValue((prevState) => (value === prevState ? '' : value));
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

  useEffect(() => {
    setselectedValue(value);
  }, [value]);

  return (
    <div className={clsx(classNames.root, className)} style={style}>
      {childrenWithProps}
    </div>
  );
};

export default ToggleButtonGroup;
