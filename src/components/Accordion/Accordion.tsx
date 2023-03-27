import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'components/icons';
import { Typography } from 'components/Typography';
import { Divider } from 'components/Divider';
import { useForwardedRef } from 'core/hooks';
import * as Styled from './styles';

export interface AccordionProps extends React.PropsWithChildren {
  /**
   * Css class passed to the root element.
   */
  className?: string;
  /**
   * If true, the component is expanded by default.
   */
  defaultExpanded?: boolean;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the header and children will be separated by a horizontal line.
   */
  divider?: boolean;
  /**
   * dictates whether the component is expanded or not. Use to create a fully controlled behavior.
   */
  expanded?: boolean;
  /**
   * Function called when changing the expanded state of the component.
   * @param expanded true if expanded, false otherwise
   * @returns void
   */
  onChange?: (expanded: boolean) => void;
  /**
   * If true, removes the top and bottom margin when expanded.
   */
  removeGutter?: boolean;
  /**
   * If true, the component will have 0 border-radius.
   */
  sharpCorners?: boolean;
  /**
   * Text or React component displayed as the title in the header.
   */
  title?: string | React.ReactNode;
  /**
   * Icon displayed before the title of the component.
   */
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
      expanded = undefined,
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
    const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
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
    }, [setIsExpanded, disabled]);

    useEffect(() => {
      onChange(isExpanded);
    }, [isExpanded]);

    useEffect(() => {
      if (expanded !== undefined) {
        setIsExpanded(expanded);
      }
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
