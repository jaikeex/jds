import React from 'react';
import { components, GroupBase, PlaceholderProps } from 'react-select';
import { Selectable } from '@components/Select';
const { Placeholder } = components;
import './CPlaceholder.styles.scss';

export interface CPlaceholderProps
  extends PlaceholderProps<Selectable, boolean, GroupBase<Selectable>> {}

const CPlaceholder: React.FC<CPlaceholderProps> = ({ ...props }) => {
  return <Placeholder {...props} />;
};

export default CPlaceholder;
