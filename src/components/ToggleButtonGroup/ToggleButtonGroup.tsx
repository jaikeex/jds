import React from 'react';
import type { Size, ThemeColorVariantsWithDefault } from 'core/types';
import { useCallback, useEffect, useState } from 'react';
import { useChildrenWithProps } from './useChildrenWithProps';
import isValueSelected from './utils/isValueSelected';
import * as Styled from './styles';

export interface ToggleButtonGroupProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  defaultValue?: string | string[];
  disabled?: boolean;
  exclusive?: boolean;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, value: string | string[] | null) => void;
  orientation?: 'horizontal' | 'vertical';
  removeBorder?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  value?: string | string[];
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  children = [],
  className = '',
  defaultValue = undefined,
  exclusive = false,
  onChange = () => {},
  orientation = 'horizontal',
  removeBorder = false,
  style = {},
  value = defaultValue,
  ...props
}): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | string[] | undefined>(value);

  const styleProps = {
    orientation,
    removeBorder
  };

  const buttonClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
      event.preventDefault();

      let newValue: string | string[];

      if (Array.isArray(selectedValue) && selectedValue.includes(value)) {
        newValue = selectedValue.filter((val) => val !== value);
      } else {
        newValue = selectedValue ? selectedValue.concat(value) : [value];
      }

      setSelectedValue(newValue);
      onChange(event, newValue);
    },
    [selectedValue, setSelectedValue, onChange]
  );

  const buttonExclusiveClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
      setSelectedValue((prevState) => (value === prevState ? '' : value));
      onChange(event, value);
    },
    [setSelectedValue, onChange]
  );

  const isChildActive = (value?: string) => isValueSelected(selectedValue, value);

  const childrenWithProps = useChildrenWithProps(
    children,
    removeBorder,
    exclusive ? buttonExclusiveClickHandler : buttonClickHandler,
    isChildActive,
    props
  );

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <Styled.ToggleButtonGroupRoot
      {...styleProps}
      className={className}
      style={style}
      data-testid="jds-toggle-button-group"
    >
      {childrenWithProps}
    </Styled.ToggleButtonGroupRoot>
  );
};

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
export default ToggleButtonGroup;
