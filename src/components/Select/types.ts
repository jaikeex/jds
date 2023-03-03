import type React from 'react';
import type { GroupBase, MenuPlacement, MultiValue, Options, SingleValue, StylesConfig } from 'react-select';
import type { ColorVariants } from 'core/types';
import type { SelectComponents } from 'react-select/dist/declarations/src/components';

export interface Selectable {
  label: React.ReactNode;
  value: string | number;
}

export interface SelectProps {
  appearance?: 'outlined' | 'filled' | 'subtle';
  autoFocus?: boolean;
  backspaceRemovesValue?: boolean;
  blurInputOnSelect?: boolean;
  className?: string;
  closeMenuOnSelect?: boolean;
  color?: ColorVariants;
  components?: Partial<SelectComponents<Selectable, boolean, GroupBase<Selectable>>> | undefined;
  defaultOpen?: boolean;
  defaultValue?: SingleValue<Selectable> | MultiValue<Selectable> | undefined;
  disabled?: boolean;
  escapeClearsValue?: boolean;
  filterOption?: null | (() => boolean);
  form?: string;
  id?: string;
  isClearable?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  minMenuHeight?: number;
  maxMenuHeight?: number;
  menuPlacement?: MenuPlacement;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (a: SingleValue<Selectable> | MultiValue<Selectable>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onMenuScrollToBottom?: (a: TouchEvent | WheelEvent) => void;
  onMenuScrollToTop?: (a: TouchEvent | WheelEvent) => void;
  openMenuOnFocus?: boolean;
  options?: Options<Selectable>;
  label?: string;
  labelPosition?: 'top' | 'bottom';
  required?: boolean;
  style?: StylesConfig<Selectable, false | true, GroupBase<Selectable>>;
  transformLabel?: boolean;
  value?: SingleValue<Selectable> | MultiValue<Selectable> | undefined;
  width?: string | number;
}
