import React, { useCallback } from 'react';
import { makeId } from 'core/utils';
import { Divider } from 'components/Divider';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import { useListContext } from 'components/List';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface ListItemProps extends React.PropsWithChildren {
  className?: string;
  clickable?: boolean;
  color?: ThemeColorVariantsWithDefault;
  compact?: boolean;
  disabled?: boolean;
  divider?: boolean;
  elementAfter?: React.ReactNode;
  elementBefore?: React.ReactNode;
  key?: string | number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  selected?: boolean;
  style?: React.CSSProperties;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children = null,
      className = '',
      clickable = false,
      color = 'default',
      compact = false,
      disabled = false,
      divider = false,
      elementAfter = null,
      elementBefore = null,
      key = makeId(5),
      onClick = () => {},
      selected = false,
      style = {}
    },
    ref
  ) => {
    const innerRef = useForwardedRef<HTMLLIElement>(ref);
    const createRippleEffect = useRippleEffect(innerRef, { color: color, animationTime: 700 });

    const { isCompact } = useListContext();

    const clickHandler = useCallback(
      (event: React.MouseEvent<HTMLLIElement>) => {
        if (clickable && !disabled) {
          createRippleEffect(event);
          onClick(event);
        }
      },
      [createRippleEffect, onclose, clickable, disabled]
    );

    return (
      <React.Fragment>
        <Styled.ListItemRoot
          color={color}
          compact={compact || isCompact}
          selected={selected}
          disabled={disabled}
          clickable={clickable}
          className={className}
          style={style}
          key={key}
          ref={innerRef}
          onClick={clickHandler}
        >
          {elementBefore && <Styled.ListItemDecorator>{elementBefore}</Styled.ListItemDecorator>}
          <Styled.ListItemContent>{children}</Styled.ListItemContent>
          {elementAfter && <Styled.ListItemDecorator>{elementAfter}</Styled.ListItemDecorator>}
        </Styled.ListItemRoot>
        {divider && <Divider flexItem />}
      </React.Fragment>
    );
  }
);

export default ListItem;
