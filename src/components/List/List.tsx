import React from 'react';
import './List.styles.scss';
import classNames from 'classnames';
import ListContextProvider from './ListContextProvider';

export interface ListProps {
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

const List: React.FC<ListProps> = ({
  children,
  className = '',
  compact = false
}) => {
  const classes = classNames('jds-list', className);

  return (
    <ListContextProvider compact={compact}>
      <ul className={classes}>{children}</ul>
    </ListContextProvider>
  );
};

export default List;
