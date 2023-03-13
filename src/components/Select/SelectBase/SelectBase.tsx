import React, { useCallback, useEffect, useState } from 'react';
import '../Select.styles.scss';
import type { GroupBase, MenuPlacement, MultiValue, Options, SingleValue, StylesConfig } from 'react-select';
import type { ColorVariants } from 'core/types';
import type { SelectComponents } from 'react-select/dist/declarations/src/components';
import type { Selectable, SelectClassKey, SelectProps } from 'components/Select/types';
import type Select from 'react-select/dist/declarations/src/Select';
import { makeId, mergeClasses } from 'core/utils';
import { default as RSelect } from 'react-select';
import { useForwardedRef } from 'core/hooks';
import { CValueContainer } from 'components/Select/custom-components';
import { useSelectClasses } from 'components/Select/useSelectClasses';
import type { Classes } from 'jss';
import { useStyles } from '../useStyles';

const SelectBase = React.forwardRef<Select<Selectable, boolean, GroupBase<Selectable>>, SelectProps>(
  (
    {
      appearance = 'outlined',
      classes = {},
      className = '',
      color = 'primary',
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
  ): JSX.Element => {
    const inputRef = useForwardedRef<Select<Selectable, boolean, GroupBase<Selectable>>>(ref);
    const classNames = classes ? mergeClasses(useStyles({ color, disabled }), classes) : useStyles({ color, disabled });
    const selectClassNames = useSelectClasses({ appearance, transformLabel, className }, classNames);

    // const classes = useSelectClasses({
    //   ...props,
    //   appearance,
    //   className,
    //   color,
    //   isMulti,
    //   transformLabel
    // });

    const styles = () => {
      const styles = { ...style };
      if (width) {
        styles.container = () => ({
          width: typeof width === 'string' ? width : `${width}}px`
        });

        return styles;
      }
    };

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
        onChange={onChange}
        placeholder={label}
        styles={styles()}
        value={value}
        classNames={selectClassNames}
        {...props}
      />
    );
  }
);

export default SelectBase;
