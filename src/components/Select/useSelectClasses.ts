import clsx from 'clsx';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import type { ControlProps, GroupBase, OptionProps, PlaceholderProps } from 'react-select';
import type { Selectable, SelectClassKey, SelectProps } from './types';
import { useStyles } from './useStyles';

export const useSelectClasses = (props: SelectProps, classes: Partial<Classes<SelectClassKey>>) => {
  const classNames = classes
    ? mergeClasses(useStyles({ color: props.color, disabled: props.disabled, width: props.width }), classes)
    : useStyles({ color: props.color, disabled: props.disabled, width: props.width });

  return {
    container: () => clsx(classNames.root, props.className),
    control: () => clsx(classNames.control, classNames[props.appearance || 'outlined']),
    valueContainer: () => classNames.valueContainer,
    placeholder: (state: PlaceholderProps<Selectable, boolean, GroupBase<Selectable>>) =>
      clsx(classNames.label, {
        [classNames.labelTransformed]: (state.hasValue || state.selectProps.inputValue) && props.transformLabel,
        [classNames.labelHidden]: (state.hasValue || state.selectProps.inputValue) && !props.transformLabel
      }),
    singleValue: () => classNames.value,
    multiValue: () => classNames.multiValue,
    multiValueLabel: () => classNames.multiValueLabel,
    multiValueRemove: () => classNames.multiValueRemove,
    indicatorSeparator: () => classNames.separator,
    menu: () => classNames.menu,
    option: (state: OptionProps<Selectable, boolean, GroupBase<Selectable>>) =>
      clsx(classNames.option, {
        [classNames.optionDisabled]: state.isDisabled,
        [classNames.optionFocused]: state.isFocused && !state.isSelected,
        [classNames.optionSelected]: state.isSelected
      })
  };
};
