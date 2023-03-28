import * as React from 'react';
import { useContext, useState } from 'react';

export interface TabsContextProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export interface TabsContextProviderProps extends React.PropsWithChildren {
  activeTab?: string | null;
  onChange?: (value: string) => void;
}

export const TabsContext = React.createContext<TabsContextProps>({
  activeTab: '',
  setActiveTab: () => {}
});

export const useTabsContext = () => useContext(TabsContext);

export const TabsContextProvider: React.FC<TabsContextProviderProps> = ({
  children = null,
  activeTab = '',
  onChange = () => {}
}) => {
  const [activeTabValue, setActiveTabValue] = useState<string>(activeTab || '');

  const activeTabChangeHandler = (value: string) => {
    setActiveTabValue(value);
    onChange(value);
  };

  const value = React.useMemo(
    () => ({ activeTab: activeTabValue, setActiveTab: activeTabChangeHandler }),
    [activeTabValue, setActiveTabValue]
  );

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
