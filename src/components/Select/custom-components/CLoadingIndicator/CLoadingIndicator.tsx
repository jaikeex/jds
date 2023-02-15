import { Loader } from '@components/Loader';
import React from 'react';
import { GroupBase, LoadingIndicatorProps } from 'react-select';
import { Selectable } from '@components/Select';

export interface CLoadingIndicatorProps
  extends LoadingIndicatorProps<Selectable, boolean, GroupBase<Selectable>> {}

const CLoadingIndicator: React.FC<CLoadingIndicatorProps> = props => {
  return <Loader size="extra-small" />;
};

export default CLoadingIndicator;
