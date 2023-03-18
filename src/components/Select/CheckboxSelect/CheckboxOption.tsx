import * as React from 'react';
import type { GroupBase, OptionProps } from 'react-select';
import type { Selectable } from 'components/Select';
import { Checkbox } from 'components/Checkbox';
import { useCallback, useRef } from 'react';
import { useRippleEffect } from 'core/hooks/useRippleEffect';
import { COption } from 'components/Select/custom-components/COption';

const CheckboxOption: React.FC<OptionProps<Selectable, boolean, GroupBase<Selectable>>> = ({
  ...props
}): JSX.Element => {
  const ref = useRef(null);
  const createRippleEffect = useRippleEffect(ref, { animationTime: 700 });

  const onMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      !props.isDisabled && createRippleEffect(event);
    },
    [createRippleEffect]
  );

  const customProps = {
    ...props.innerProps,
    onMouseDown,
    ref
  };

  const checkboxColor = props.data.color ? props.data.color : 'primary';

  return (
    <COption {...props} innerProps={customProps}>
      <Checkbox color={checkboxColor} checked={props.isSelected} />
      {props.children}
    </COption>
  );
};

export default CheckboxOption;
