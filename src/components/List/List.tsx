import React from 'react';
import ListContextProvider from './ListContextProvider';
import type { ListClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface ListProps {
  children?: React.ReactNode;
  className?: string;
  classes?: Classes<ListClassKey>;
  compact?: boolean;
}

const List: React.FC<ListProps> = ({ children, className = '', classes = {}, compact = false }) => {
  const classNames = mergeClasses(useStyles(), classes);

  return (
    <ListContextProvider compact={compact}>
      <ul className={clsx(classNames.root, className)}>{children}</ul>
    </ListContextProvider>
  );
};

export default List;
