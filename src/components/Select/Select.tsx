import React from 'react';
import './Select.styles.scss';
import { Selectable } from './types';

export interface SelectProps {
  className?: string;
  defaultOpen?: boolean;
  defaultValue?: Selectable;
  id?: string;
}

const Select: React.FC<SelectProps> = props => {
  return <div></div>;
};

export default Select;
