import React, { useCallback, useRef } from 'react';
import { TabButton } from './TabButton';
import { Divider } from 'components/Divider';
import { scrollToSide } from 'core/utils';
import { TabsContextProvider } from './TabsContextProvider';
import { useDistributedProps } from './useDistributedProps';
import { ChevronLeftIcon, ChevronRightIcon } from 'components/icons';
import { useSideScroll } from './useSideScroll';
import { TabPanelsContainer } from './TabPanelsContainer';
import * as Styled from './styles';

export interface TabsProps extends React.PropsWithChildren {
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

  const { leftScrollButtonVisible, rightScrollButtonVisible, scrolledToLeft, scrolledToRight } = useSideScroll(
    buttonPanelRef,
    scrollButtons
  );

  const styleProps = {
    scrollButtons,
    justifyButtons,
    removeHorizontalPadding: props.removeHorizontalPadding
  };

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
    <TabsContextProvider activeTab={value || tabButtonProps[0].value} onChange={onChange}>
      <Styled.TabsRoot className={className} {...styleProps} style={style}>
        {leftScrollButtonVisible && (
          <Styled.TabsScrollButtonWrapper {...styleProps} direction={'left'} style={{ left: 0 }}>
            <Styled.TabsScrollButton
              enableBackground
              color="default"
              disabled={scrolledToLeft}
              onClick={scrollButtonPanelLeft}
            >
              <ChevronLeftIcon />
            </Styled.TabsScrollButton>
          </Styled.TabsScrollButtonWrapper>
        )}
        {rightScrollButtonVisible && (
          <Styled.TabsScrollButtonWrapper {...styleProps} direction={'right'} style={{ right: 0 }}>
            <Styled.TabsScrollButton
              enableBackground
              color="default"
              disabled={scrolledToRight}
              onClick={scrollButtonPanelRight}
            >
              <ChevronRightIcon />
            </Styled.TabsScrollButton>
          </Styled.TabsScrollButtonWrapper>
        )}
        <Styled.TabsButtonPanel {...styleProps} id={`button-panel-`} ref={buttonPanelRef}>
          {tabButtonProps.map((props, index) => {
            const { ...rest } = props;
            return <TabButton {...rest} key={`${index}-${value}`} />;
          })}
        </Styled.TabsButtonPanel>
        {divider && <Divider removeMargin />}
        <TabPanelsContainer value={value}>{tabPanelProps}</TabPanelsContainer>
      </Styled.TabsRoot>
    </TabsContextProvider>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;
