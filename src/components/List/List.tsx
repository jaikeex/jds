import React from 'react';
import ListContextProvider from './ListContextProvider';
import * as Styled from './styles';

export interface ListProps {
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

const List: React.FC<ListProps> = ({ children, className = '', compact = false }) => (
  <ListContextProvider compact={compact}>
    <Styled.ListRoot className={className}>{children}</Styled.ListRoot>
  </ListContextProvider>
);

export default List;
