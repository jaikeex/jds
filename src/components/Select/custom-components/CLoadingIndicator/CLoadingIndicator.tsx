import { Loader } from '@components/Loader';
import React from 'react';
import type { GroupBase, LoadingIndicatorProps } from 'react-select';
import type { Selectable } from '@components/Select';

const CLoadingIndicator: React.FC<
  LoadingIndicatorProps<Selectable, boolean, GroupBase<Selectable>>
> = () => <Loader size="extra-small" />;

export default CLoadingIndicator;
