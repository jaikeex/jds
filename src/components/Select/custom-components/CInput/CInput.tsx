import React from 'react';
import type { InputProps, GroupBase } from 'react-select';
import type { Selectable } from 'components/Select';
import { components } from 'react-select';
import { useSelectContext } from 'components/Select/SelectContextProvider';
const { Input } = components;

const CInput: React.FC<InputProps<Selectable, boolean, GroupBase<Selectable>>> = ({ ...props }): JSX.Element => {
  const { readonly } = useSelectContext();

  return <Input {...props} readOnly={readonly} />;
};

export default CInput;
