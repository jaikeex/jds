import React from 'react';
import { Loader } from 'components/Loader';
import type { GroupBase, LoadingIndicatorProps } from 'react-select';
import type { Selectable } from 'components/Select';

const CLoadingIndicator: React.FC<LoadingIndicatorProps<Selectable, boolean, GroupBase<Selectable>>> = () => (
  <Loader style={{ height: '1.5rem', width: '1.5rem', borderWidth: '3px' }} />
);

export default CLoadingIndicator;
