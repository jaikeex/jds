import React from 'react';
import type { GroupBase, PlaceholderProps } from 'react-select';
import { components } from 'react-select';
import type { Selectable } from '@components/Select';
const { Placeholder } = components;
import './CPlaceholder.styles.scss';

const CPlaceholder: React.FC<
  PlaceholderProps<Selectable, boolean, GroupBase<Selectable>>
> = ({ ...props }) => <Placeholder {...props} />;

export default CPlaceholder;
