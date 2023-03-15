import React, { useCallback, useState } from 'react';
import { TabButton } from './TabButton';
import { Divider } from 'components/Divider';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import type { TabsClassKey } from './types';
import type { Classes } from 'jss';

export interface TabsProps {
  children?: React.ReactNode[];
  classes?: Classes<TabsClassKey>;
  className?: string;
  divider?: boolean;
  justifyButtons?: 'space-around' | 'space-between' | 'space-evenly' | 'stretch' | 'center' | 'flex-end' | 'flex-start';
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  classes = {},
  className = '',
  divider = false,
  justifyButtons = 'flex-start',
  style = {}
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const classNames = mergeClasses(useStyles(), classes);

  const labels = React.Children.map(children, (child) => {
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
      <div style={styles()} className={classNames.root}>
        {labels &&
          labels.map((args, index) => (
            <div
              key={index}
              //TODO: refactor this shit
              onClick={useCallback(() => tabChangeHandler(index), [tabChangeHandler])}
            >
              <TabButton active={index === activeTab} disabled={args.disabled}>
                {args.label}
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
