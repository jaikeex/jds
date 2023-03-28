import * as React from 'react';
import { useContext, useMemo } from 'react';
import type { ThemeColorVariants } from 'core/types';

export interface SelectContextProps {
  color?: ThemeColorVariants;
  readonly?: boolean;
}

export interface SelectContextProviderProps extends React.PropsWithChildren {
  color?: ThemeColorVariants;
  readonly?: boolean;
}

export const SelectContext = React.createContext<SelectContextProps>({
  color: 'primary',
  readonly: false
});

export const useSelectContext = () => useContext(SelectContext);

const SelectContextProvider: React.FC<SelectContextProviderProps> = ({
  children = null,
  color = 'primary',
  readonly = false
}): JSX.Element => {
  const defaultValue = useMemo(
    () => ({
      color,
      readonly
    }),
    [color, readonly]
  );

  return <SelectContext.Provider value={defaultValue}>{children}</SelectContext.Provider>;
};

export default SelectContextProvider;
