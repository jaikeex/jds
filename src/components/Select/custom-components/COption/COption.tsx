import * as React from 'react';
import type { GroupBase, OptionProps } from 'react-select';
import { components } from 'react-select';
import type { Selectable } from 'components/Select';
import { useCallback, useRef } from 'react';
import { useRippleEffect } from 'core/hooks';
const { Option } = components;

export type COptionProps = OptionProps<Selectable, boolean, GroupBase<Selectable>>;

const COption: React.FC<OptionProps<Selectable, boolean, GroupBase<Selectable>>> = ({ ...props }): JSX.Element => {
  const ref = useRef(null);
  const createRippleEffect = useRippleEffect(ref, { animationTime: 600 });

  const onMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      !props.isDisabled && !props.isSelected && props.isMulti && createRippleEffect(event);
    },
    [createRippleEffect, props.isSelected, props.isDisabled]
  );

  const customInnerProps = {
    ...props.innerProps,
    onMouseDown,
    ref
  };

  return (
    <Option {...props} innerProps={customInnerProps}>
      {props.children}
    </Option>
  );
};

export default COption;
