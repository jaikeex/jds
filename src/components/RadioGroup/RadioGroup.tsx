import type { Size, ThemeColorVariants } from 'core/types';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import isValueSelected from './isValueSelected';
import { useChildrenWithProps } from './useChildrenWithProps';
import * as Styled from './styles';

export interface RadioGroupProps extends React.PropsWithChildren {
  /**
   * Css class passed to the root component.
   */
  className?: string;
  /**
   * Color of the Radio group. Can be overriden by setting a specific color on `RadioButton` child component. Can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * Default selected value.
   */
  defaultValue?: string;
  /**
   * If true, the entire group is disabled.
   */
  disabled?: boolean;
  /**
   * Sets the position of displayed label for each radio button.
   */
  labelPosition?: 'left' | 'right' | 'bottom' | 'top';
  /**
   * Fired whenever the selection changes.
   * @param event React.ChangeEvent<HTMLInputElement>
   * @param value string | null
   * @returns void
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string | null) => void;
  /**
   * Sets whether the group is oriented vertically or horizontally.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The size of the group.
   */
  size?: Size;
  /**
   * CSS styles applied to the root element.
   */
  style?: React.CSSProperties;
  /**
   * Puts the group into controlled state and sets the currently active value.
   */
  value?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children = null,
  className = '',
  defaultValue = undefined,
  onChange = () => {},
  orientation = 'vertical',
  style = {},
  value = undefined,
  ...props
}): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

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
    value && setSelectedValue(value);
  }, [value]);

  return (
    <Styled.RadioGroupRoot orientation={orientation} className={className} style={style} data-testid="jds-radio-group">
      {childrenWithProps}
    </Styled.RadioGroupRoot>
  );
};

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
