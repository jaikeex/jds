import React from 'react';
import { Loader } from 'components/Loader';
import type { GroupBase, LoadingIndicatorProps } from 'react-select';
import type { Selectable } from 'components/Select';

const CLoadingIndicator: React.FC<LoadingIndicatorProps<Selectable, boolean, GroupBase<Selectable>>> = () => (
  <Loader size="small" />
);

export default CLoadingIndicator;
