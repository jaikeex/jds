import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'components/icons';
import { Typography } from 'components/Typography';
import { Divider } from 'components/Divider';
import { useForwardedRef } from 'core/hooks';
import * as Styled from './styles';

export interface AccordionProps extends React.PropsWithChildren {
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  divider?: boolean;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
  removeGutter?: boolean;
  sharpCorners?: boolean;
  title?: string | React.ReactNode;
  titleIcon?: React.ReactNode;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children = null,
      className = '',
      defaultExpanded = false,
      disabled = false,
      divider = false,
      expanded = defaultExpanded,
      onChange = () => {},
      removeGutter = false,
      sharpCorners = false,
      title = '',
      titleIcon = null
    },
    ref
  ): JSX.Element => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const innerRef = useForwardedRef(ref);
    const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
    const [contentHeight, setContentHeight] = useState<number>(0);

    const getTitleElement = () => {
      if (typeof title === 'string') {
        return <Typography>{title}</Typography>;
      } else {
        return title;
      }
    };

    const expandButtonClickHandler = useCallback(() => {
      if (disabled) {
        return;
      }

      setIsExpanded((prevState) => !prevState);
    }, [setIsExpanded]);

    useEffect(() => {
      onChange(isExpanded);
    }, [isExpanded]);

    useEffect(() => {
      setIsExpanded(expanded);
    }, [expanded, setIsExpanded]);

    useEffect(() => {
      setContentHeight(contentRef.current?.scrollHeight || 0);
    }, [contentRef.current?.scrollHeight, setContentHeight]);

    return (
      <Styled.AccordionRoot
        ref={innerRef}
        sharpCorners={sharpCorners}
        expanded={isExpanded}
        removeGutter={removeGutter}
        className={className}
      >
        <Styled.AccordionHeader onClick={expandButtonClickHandler} disabled={disabled}>
          {titleIcon && titleIcon}
          {getTitleElement()}
          <Styled.AccordionExpandIcon>
            {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Styled.AccordionExpandIcon>
        </Styled.AccordionHeader>
        {divider && isExpanded && <Divider removeMargin />}
        <Styled.AccordionContent ref={contentRef} height={contentHeight} expanded={isExpanded}>
          {children}
        </Styled.AccordionContent>
      </Styled.AccordionRoot>
    );
  }
);

Accordion.displayName = 'Accordion';
export default Accordion;
