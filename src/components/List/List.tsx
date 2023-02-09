import React from 'react';
import './List.styles.scss';
import classNames from 'classnames';

export interface ListProps {
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
  removeGap?: boolean;
}

const List: React.FC<ListProps> = ({
  children,
  className = '',
  compact = false,
  removeGap = false
}) => {
  const classes = classNames('jds-list', className, {
    'jds-list--compact': compact,
    'jds-list--no-gap': removeGap
  });

  return <ul className={classes}>{children}</ul>;
};

export default List;
