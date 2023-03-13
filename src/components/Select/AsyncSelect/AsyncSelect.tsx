import React, { useCallback, useEffect, useState } from 'react';
import '../Select.styles.scss';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { GroupBase, MultiValue, SingleValue } from 'react-select';
import { default as RAsyncSelect } from 'react-select/async';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CValueContainer } from 'components/Select/custom-components';
import { useSelectClasses } from 'components/Select/useSelectClasses';
import type Select from 'react-select/dist/declarations/src/Select';

export interface AsyncSelectProps extends SelectProps {
  cacheOptions?: boolean | ReadonlyArray<Selectable | GroupBase<Selectable>>;
  defaultOptions?: boolean | ReadonlyArray<Selectable | GroupBase<Selectable>>;
  loadOptions?: (
    query: string,
    callback: (options: ReadonlyArray<Selectable | GroupBase<Selectable>>) => void
  ) => void | Promise<ReadonlyArray<Selectable | GroupBase<Selectable>>>;
}

const AsyncSelect = React.forwardRef<Select<Selectable, boolean, GroupBase<Selectable>>, AsyncSelectProps>(
  (
    {
      appearance = 'outlined',
      className = '',
      color = 'default',
      components = {},
      defaultValue = undefined,
      disabled = false,
      id = makeId(5),
      isMulti = false,
      onChange = () => {},
      label = '',
      style = {},
      transformLabel = false,
      value = defaultValue,
      width = undefined,
      ...props
    },
    ref
  ) => {
    const inputRef = useForwardedRef<Select<Selectable, boolean, GroupBase<Selectable>>>(ref);
    const [selectedValue, setSelectedValue] = useState<SingleValue<Selectable> | MultiValue<Selectable> | undefined>(
      value
    );

    const classes = useSelectClasses({
      ...props,
      appearance,
      className,
      color,
      isMulti,
      transformLabel
    });

    const styles = () => {
      const styles = { ...style };
      if (width) {
        styles.container = () => ({
          width: typeof width === 'string' ? width : `${width}}px`
        });

        return styles;
      }
    };

    const selectionChangeHandler = useCallback(
      (value: SingleValue<Selectable> | MultiValue<Selectable>) => {
        setSelectedValue(value);
        onChange(value);
      },
      [setSelectedValue, onChange]
    );

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    return (
      <RAsyncSelect
        ref={inputRef}
        components={{
          ValueContainer: CValueContainer,
          ...components
        }}
        id={id}
        isDisabled={disabled}
        isMulti={isMulti}
        onChange={selectionChangeHandler}
        placeholder={label}
        styles={styles()}
        value={selectedValue}
        classNames={classes}
        {...props}
      />
    );
  }
);

AsyncSelect.displayName = 'AsyncSelect';
export default AsyncSelect;
