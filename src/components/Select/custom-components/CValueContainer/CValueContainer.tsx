import React from 'react';
import './CValueContainer.styles.scss';
import { components, GroupBase, ValueContainerProps } from 'react-select';
import { CPlaceholder } from '@components/Select';
import { Selectable } from '@components/Select';
const { ValueContainer, Placeholder } = components;

export interface CValueContainerProps
  extends ValueContainerProps<Selectable, boolean, GroupBase<Selectable>> {}
const CValueContainer: React.FC<CValueContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <ValueContainer {...props}>
      {/* @ts-ignore */}
      <CPlaceholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </CPlaceholder>
      {React.Children.map(children, child =>
        React.isValidElement(child) && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

export default CValueContainer;
