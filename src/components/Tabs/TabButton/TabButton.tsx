import React from 'react';
import type { ButtonProps } from 'components/Button';
import { useTabsContext } from 'components/Tabs/TabsContextProvider';
import { useForwardedRef } from 'core/hooks';
import { useScrollToView } from 'core/hooks';
import { useCallback } from 'react';
import * as Styled from './styles';

export interface TabButtonProps extends Omit<ButtonProps, 'ref' | 'classes'> {
  label?: string;
  value?: string;
}

const TabButton: React.FC<TabButtonProps> = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label = '', value = undefined, ...props }, ref) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const scrollToView = useScrollToView(buttonRef.current, 'left', 48);
    const { setActiveTab, activeTab } = useTabsContext();

    const styleProps = {
      active: activeTab === value
    };

    const buttonClickHandler = useCallback(() => {
      value && setActiveTab(value);
      scrollToView();
    }, [setActiveTab, scrollToView, value]);

    return (
      <Styled.TabButtonRoot {...props} {...styleProps} appearance="subtle" ref={buttonRef} onClick={buttonClickHandler}>
        {label}
      </Styled.TabButtonRoot>
    );
  }
);

TabButton.displayName = 'TabButton';
export default TabButton;
