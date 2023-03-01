import classNames from 'classnames';
import type { ControlProps, GroupBase, OptionProps, PlaceholderProps } from 'react-select';
import type { Selectable, SelectProps } from './types';

export const useSelectClasses = (props: SelectProps) => ({
  container: () => classNames('jds-select', `jds-select__container--color--${props.color}`, props.className),
  control: (state: ControlProps<Selectable, boolean, GroupBase<Selectable>>) =>
    classNames(
      'jds-select__control',
      `jds-select__control--${props.appearance}${state.menuIsOpen || state.isFocused ? '--active' : ''}`
    ),
  valueContainer: () => 'jds-select-value-container',
  placeholder: (state: PlaceholderProps<Selectable, boolean, GroupBase<Selectable>>) =>
    classNames(
      'jds-select-placeholder',
      `jds-select-placeholder--position--${props.labelPosition}${props.isMulti ? '--multi' : ''}`,
      {
        'jds-select-placeholder--transformed': (state.hasValue || state.selectProps.inputValue) && props.transformLabel,
        'jds-select-placeholder--transformed--hidden':
          (state.hasValue || state.selectProps.inputValue) && !props.transformLabel
      }
    ),
  singleValue: () => 'jds-select__value',
  multiValue: () => 'jds-select__multi-value',
  multiValueLabel: () => 'jds-select__multi-value--label',
  multiValueRemove: () => 'jds-select__multi-value--remove',
  indicatorSeparator: () => 'jds-select__indicator-separator',
  menu: () => 'jds-select__menu',
  option: (state: OptionProps<Selectable, boolean, GroupBase<Selectable>>) =>
    classNames('jds-select__option', {
      'jds-select__option--selected': state.isSelected,
      'jds-select__option--focused': state.isFocused
    })
});
