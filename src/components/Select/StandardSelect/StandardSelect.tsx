import React, { useEffect, useState } from 'react';
import '../Select.styles.scss';
import { Selectable, SelectProps } from '../types';
import { default as RSelect, MultiValue, SingleValue } from 'react-select';
import { makeId } from '@core/utils';
import { useForwardedRef } from '@core/hooks';
import { CValueContainer } from '@components/Select/custom-components';
import { useSelectClasses } from '../useSelectClasses';

const StandardSelect = React.forwardRef<any, SelectProps>(
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
      <RSelect
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

export default StandardSelect;
