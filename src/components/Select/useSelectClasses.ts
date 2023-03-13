import classNames from 'classnames';
import type { Classes } from 'jss';
import type { ControlProps, GroupBase, OptionProps, PlaceholderProps } from 'react-select';
import type { Selectable, SelectClassKey, SelectProps } from './types';

export const useSelectClasses = (props: SelectProps, classes: Classes<SelectClassKey>) => ({
  container: () => classNames(classes.root, props.className),
  control: () => classNames(classes.control, classes[props.appearance || 'outlined']),
  valueContainer: () => classes.valueContainer,
  placeholder: (state: PlaceholderProps<Selectable, boolean, GroupBase<Selectable>>) =>
    classNames(classes.label, {
      [classes.labelTransformed]: (state.hasValue || state.selectProps.inputValue) && props.transformLabel,
      [classes.labelHidden]: (state.hasValue || state.selectProps.inputValue) && !props.transformLabel
    }),
  singleValue: () => classes.value,
  multiValue: () => classes.multiValue,
  multiValueLabel: () => classes.multiValueLabel,
  multiValueRemove: () => classes.multiValueRemove,
  indicatorSeparator: () => classes.separator,
  menu: () => classes.menu,
  option: (state: OptionProps<Selectable, boolean, GroupBase<Selectable>>) =>
    classNames(classes.option, {
      [classes.optionDisabled]: state.isSelected,
      [classes.optionFocused]: state.isFocused
    })
});
