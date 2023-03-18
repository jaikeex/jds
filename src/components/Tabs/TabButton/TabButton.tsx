import React from 'react';
import type { ButtonProps } from 'components/Button';
import { Button } from 'components/Button';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import { useTabsContext } from 'components/Tabs/TabsContextProvider';
import { useForwardedRef } from 'core/hooks';
import type { Classes } from 'jss';
import type { TabButtonClassKey } from './types';
import { useScrollToView } from 'core/hooks';
import { useCallback } from 'react';

export interface TabButtonProps extends Omit<ButtonProps, 'ref' | 'classes'> {
  classes?: Classes<TabButtonClassKey>;
  label?: string;
  value?: string;
}

const TabButton: React.FC<TabButtonProps> = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label = '', value = undefined, ...props }, ref) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const scrollToView = useScrollToView(buttonRef.current, 'left', 48);
    const { setActiveTab, activeTab } = useTabsContext();

    const classNames = useStyles();

    const buttonClickHandler = useCallback(() => {
      value && setActiveTab(value);
      scrollToView();
    }, [setActiveTab, scrollToView, value]);

    return (
      <Button
        {...props}
        appearance="subtle"
        ref={buttonRef}
        onClick={buttonClickHandler}
        className={clsx(classNames.root, activeTab === value && classNames.active)}
      >
        {label}
      </Button>
    );
  }
);

TabButton.displayName = 'TabButton';
export default TabButton;
