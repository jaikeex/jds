import React from 'react';
import * as Styled from './styles';

export interface TabPanelProps extends React.PropsWithChildren {
  disabled?: boolean;
  label?: string;
  className?: string;
  removeHorizontalPadding?: boolean;
  removeVerticalPadding?: boolean;
  value?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children = null,
  className = '',
  removeHorizontalPadding = false,
  removeVerticalPadding = false
}) => {
  const styleProps = {
    removeHorizontalPadding,
    removeVerticalPadding
  };

  return (
    <Styled.TabPanelRoot {...styleProps} className={className}>
      {children}
    </Styled.TabPanelRoot>
  );
};

TabPanel.displayName = 'TabPanel';
export default TabPanel;
