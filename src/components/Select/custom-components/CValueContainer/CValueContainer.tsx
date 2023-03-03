import React from 'react';
import './CValueContainer.styles.scss';
import type { GroupBase, ValueContainerProps } from 'react-select';
import { components } from 'react-select';
import { CPlaceholder } from 'components/Select/custom-components/CPlaceholder';
import type { Selectable } from 'components/Select';
const { ValueContainer, Placeholder } = components;

const CValueContainer: React.FC<ValueContainerProps<Selectable, boolean, GroupBase<Selectable>>> = ({
  children,
  ...props
}) => (
  <ValueContainer {...props}>
    {/* @ts-ignore */}
    <CPlaceholder {...props} isFocused={props.isFocused}>
      {props.selectProps.placeholder}
    </CPlaceholder>
    {React.Children.map(children, (child) =>
      React.isValidElement(child) && child.type !== Placeholder ? child : null
    )}
  </ValueContainer>
);

export default CValueContainer;
