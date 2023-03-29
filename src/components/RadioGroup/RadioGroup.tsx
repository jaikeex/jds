import type { Size, ThemeColorVariants } from 'core/types';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import isValueSelected from './isValueSelected';
import { useChildrenWithProps } from './useChildrenWithProps';
import * as Styled from './styles';

export interface RadioGroupProps extends React.PropsWithChildren {
  className?: string;
  color?: ThemeColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  labelPosition?: 'left' | 'right' | 'bottom' | 'top';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string | null) => void;
  orientation?: 'horizontal' | 'vertical';
  size?: Size;
  style?: React.CSSProperties;
  value?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children = null,
  className = '',
  defaultValue = undefined,
  onChange = () => {},
  orientation = 'vertical',
  style = {},
  value = defaultValue,
  ...props
}): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

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
    <Styled.RadioGroupRoot orientation={orientation} className={className} style={style}>
      {childrenWithProps}
    </Styled.RadioGroupRoot>
  );
};

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
