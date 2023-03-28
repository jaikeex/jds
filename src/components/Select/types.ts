import type React from 'react';
import type {
  ActionMeta,
  GroupBase,
  MenuPlacement,
  MultiValue,
  Options,
  SingleValue,
  StylesConfig
} from 'react-select';
import type { ThemeColorVariants } from 'core/types';
import type { SelectComponents } from 'react-select/dist/declarations/src/components';

export interface Selectable {
  label: React.ReactNode;
  value: string;
  color?: ThemeColorVariants;
  isDisabled?: boolean;
}

export interface SelectProps<IsMulti extends boolean = false> {
  appearance?: 'outlined' | 'filled' | 'subtle';
  autoFocus?: boolean;
  backspaceRemovesValue?: boolean;
  blurInputOnSelect?: boolean;
  className?: string;
  closeMenuOnSelect?: boolean;
  color?: ThemeColorVariants;
  components?: Partial<SelectComponents<Selectable, boolean, GroupBase<Selectable>>> | undefined;
  defaultOpen?: boolean;
  defaultValue?: SingleValue<Selectable> | MultiValue<Selectable> | undefined;
  disabled?: boolean;
  escapeClearsValue?: boolean;
  filterOption?: null | (() => boolean);
  form?: string;
  height?: string | number;
  id?: string;
  isClearable?: boolean;
  isLoading?: boolean;
  isMulti?: IsMulti;
  isSearchable?: boolean;
  minMenuHeight?: number;
  maxMenuHeight?: number;
  menuPlacement?: MenuPlacement;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: IsMulti extends true
    ? (value: Selectable[], actionMeta: ActionMeta<Selectable>) => void
    : (value: Selectable, actionMeta: ActionMeta<Selectable>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onMenuScrollToBottom?: (a: TouchEvent | WheelEvent) => void;
  onMenuScrollToTop?: (a: TouchEvent | WheelEvent) => void;
  openMenuOnFocus?: boolean;
  options?: Options<Selectable>;
  label?: string;
  placeholder?: string;
  //preventOverflow?: boolean;
  readonly?: boolean;
  required?: boolean;
  style?: StylesConfig<Selectable, false | true, GroupBase<Selectable>>;
  transformLabel?: boolean;
  value?: SingleValue<Selectable> | MultiValue<Selectable> | undefined;
  width?: string | number;
}
