import React, { useCallback, useRef } from 'react';
import { TabButton } from './TabButton';
import { Divider } from 'components/Divider';
import { mergeClasses, scrollToSide } from 'core/utils';
import { useStyles } from './useStyles';
import type { TabsClassKey } from './types';
import type { Classes } from 'jss';
import { TabsContextProvider } from './TabsContextProvider';
import { useDistributedProps } from './useDistributedProps';
import clsx from 'clsx';
import { IconButton } from 'components/IconButton';
import { ChevronLeftIcon, ChevronRightIcon } from 'components/icons';
import { useSideScroll } from './useSideScroll';
import { TabPanelsContainer } from './TabPanelsContainer';

export interface TabsProps {
  children?: React.ReactElement[];
  classes?: Classes<TabsClassKey>;
  className?: string;
  defaultValue?: string;
  divider?: boolean;
  justifyButtons?: 'space-around' | 'space-between' | 'space-evenly' | 'stretch' | 'center' | 'flex-end' | 'flex-start';
  onChange?: (value: string) => void;
  removeHorizontalPadding?: boolean;
  removeVerticalPadding?: boolean;
  scrollButtons?: 'auto' | 'allways' | 'never';
  style?: React.CSSProperties;
  value?: string | null;
}

const Tabs: React.FC<TabsProps> = ({
  children = [],
  classes = {},
  className = '',
  defaultValue = undefined,
  divider = false,
  justifyButtons = 'stretch',
  onChange = () => {},
  scrollButtons = 'auto',
  style = {},
  value = defaultValue,
  ...props
}) => {
  const buttonPanelRef = useRef(null);

  const classNames = mergeClasses(useStyles({ justifyButtons, scrollButtons, ...props }), classes);

  const { leftScrollButtonVisible, rightScrollButtonVisible, scrolledToLeft, scrolledToRight } = useSideScroll(
    buttonPanelRef,
    scrollButtons
  );

  const scrollButtonPanelRight = useCallback(
    () => scrollToSide(buttonPanelRef.current, { behavior: 'smooth' }, 'right'),
    [scrollToSide, buttonPanelRef]
  );

  const scrollButtonPanelLeft = useCallback(
    () => scrollToSide(buttonPanelRef.current, { behavior: 'smooth' }, 'left'),
    [scrollToSide, buttonPanelRef]
  );

  const { tabButtonProps, tabPanelProps } = useDistributedProps(children, props);

  return (
    <TabsContextProvider activeTab={value} onChange={onChange}>
      <div className={clsx(classNames.root, className)} style={style}>
        {leftScrollButtonVisible && (
          <div className={clsx(classNames.scrollButtonWrapper, classNames.scrollButtonLeft)} style={{ left: 0 }}>
            <IconButton
              enableBackground
              className={classNames.scrollButton}
              color="default"
              disabled={scrolledToLeft}
              onClick={scrollButtonPanelLeft}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
        )}
        {rightScrollButtonVisible && (
          <div className={clsx(classNames.scrollButtonWrapper, classNames.scrollButtonRight)} style={{ right: 0 }}>
            <IconButton
              enableBackground
              className={classNames.scrollButton}
              color="default"
              disabled={scrolledToRight}
              onClick={scrollButtonPanelRight}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
        )}
        <div id={`button-panel-${classNames.root}`} ref={buttonPanelRef} className={classNames.buttonPanel}>
          {tabButtonProps.map((props, index) => {
            const { classes, ...rest } = props;
            return <TabButton {...rest} key={`${index}-${value}`} />;
          })}
        </div>
        {divider && <Divider removeMargin />}
        <TabPanelsContainer value={value}>{tabPanelProps}</TabPanelsContainer>
      </div>
    </TabsContextProvider>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;
