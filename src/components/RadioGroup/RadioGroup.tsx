import clsx from 'clsx';
import type { ThemeColorVariants } from 'core/types';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import isValueSelected from './isValueSelected';
import type { RadioGroupClassKey } from './types';
import { useChildrenWithProps } from './useChildrenWithProps';
import { useStyles } from './useStyles';

export interface RadioGroupProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  classes?: Classes<RadioGroupClassKey>;
  color?: ThemeColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  labelPosition?: 'left' | 'right' | 'bottom' | 'top';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string | null) => void;
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  value?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children = null,
  className = '',
  classes = {},
  defaultValue = undefined,
  onChange = () => {},
  orientation = 'vertical',
  style = {},
  value = defaultValue,
  ...props
}): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  const classNames = mergeClasses(useStyles({ orientation }), classes);

  const radioButtonClickHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setSelectedValue(event.target.value);
      onChange(event, value);
    },
    [setSelectedValue, onChange]
  );

  const isChildActive = (value: string | undefined) => isValueSelected(selectedValue, value);

  const childrenWithProps = useChildrenWithProps(children, radioButtonClickHandler, isChildActive, props);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div className={clsx(classNames.root, className)} style={style}>
      {childrenWithProps}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
