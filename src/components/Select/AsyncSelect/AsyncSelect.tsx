import React, { useEffect, useState } from 'react';
import '../Select.styles.scss';
import { Selectable, SelectProps } from '../types';
import { GroupBase, MultiValue, SingleValue } from 'react-select';
import { default as RAsyncSelect } from 'react-select/async';
import { makeId } from '@core/utils';
import { useForwardedRef } from '@core/hooks';
import { CValueContainer } from '@components/Select/custom-components';
import { useSelectClasses } from '../useSelectClasses';

export interface AsyncSelectProps extends SelectProps {
  cacheOptions?: any;
  defaultOptions?: boolean | ReadonlyArray<Selectable | GroupBase<Selectable>>;
  loadOptions?: (
    query: string,
    callback: (
      options: ReadonlyArray<Selectable | GroupBase<Selectable>>
    ) => void
  ) => void | Promise<ReadonlyArray<Selectable | GroupBase<Selectable>>>;
}

const AsyncSelect = React.forwardRef<any, AsyncSelectProps>(
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
      labelPosition = 'top',
      required = false,
      style = {},
      transformLabel = false,
      value = defaultValue,
      width = undefined,
      ...props
    },
    ref
  ) => {
    const inputRef = useForwardedRef<any>(ref);
    const [selectedValue, setSelectedValue] =
      useState<SingleValue<Selectable> | MultiValue<Selectable> | undefined>(
        value
      );

    const classes = useSelectClasses({
      ...props,
      labelPosition,
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

    const selectionChangeHandler = (
      value: SingleValue<Selectable> | MultiValue<Selectable>
    ) => {
      setSelectedValue(value);
      onChange(value);
    };

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

export default AsyncSelect;
