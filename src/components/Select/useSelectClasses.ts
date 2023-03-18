import clsx from 'clsx';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import type { GroupBase, PlaceholderProps } from 'react-select';
import type { Selectable, SelectClassKey, SelectProps } from './types';
import { useStyles } from './useStyles';

export const useSelectClasses = (props: SelectProps, classes: Partial<Classes<SelectClassKey>>) => {
  const classNames = classes ? mergeClasses(useStyles({ ...props }), classes) : useStyles({ ...props });

  return {
    container: () => clsx(classNames.root, props.className),
    control: () => clsx(classNames.control, classNames[props.appearance || 'outlined']),
    valueContainer: () => classNames.valueContainer,
    placeholder: (state: PlaceholderProps<Selectable, boolean, GroupBase<Selectable>>) => {
      const hasInput = state.hasValue || state.selectProps.inputValue;
      return clsx(classNames.label, {
        [classNames.placeholder]: props.placeholder,
        [classNames.labelTransformed]: (hasInput && props.transformLabel) || props.placeholder || !props.transformLabel,
        [classNames.labelStripped]: hasInput && props.placeholder
      });
    },
    input: () => classNames.input,
    singleValue: () => classNames.value,
    multiValue: () => classNames.multiValue,
    multiValueLabel: () => classNames.multiValueLabel,
    multiValueRemove: () => classNames.multiValueRemove,
    indicatorSeparator: () => classNames.separator,
    menu: () => classNames.menu,
    clearIndicator: () => classNames.clearIndicator
  };
};
