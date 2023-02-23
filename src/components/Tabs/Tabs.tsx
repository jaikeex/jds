import React, { useState } from 'react';
import { Typography } from '@components/Typography';
import './Tabs.styles.scss';
import { TabButton } from './TabButton';
import { Divider } from '@components/Divider';

export interface TabsProps {
  children?: React.ReactNode[];
  divider?: boolean;
  justifyButtons?:
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'center'
    | 'flex-end'
    | 'flex-start';
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  divider = false,
  justifyButtons = 'flex-start',
  style = {}
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const labels = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return { label: child.props.label, disabled: child.props.disabled };
    }
  });

  const styles = () => {
    const styles = { ...style };
    styles.justifyContent = justifyButtons;

    return styles;
  };

  const tabChangeHandler = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={styles()} className="jds-tabs">
        {labels &&
          labels.map((props, index) => (
            <div onClick={() => tabChangeHandler(index)}>
              <TabButton active={index === activeTab} disabled={props.disabled}>
                {props.label}
              </TabButton>
            </div>
          ))}
      </div>
      {divider && <Divider removeMargin />}
      {children && children[activeTab]}
    </div>
  );
};

export default Tabs;
