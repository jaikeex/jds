import React from 'react';
import type { ThemeColorVariants } from 'core/types';
import * as Styled from './styles';
import type { TypographyProps, TypographyVariants } from 'components/Typography';

export interface LinkProps extends React.PropsWithChildren, TypographyProps {
  /**
   * Css class passed to the root component.
   */
  className?: string;
  /**
   * The color of the link. Can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * Target of the anchor element.
   */
  href?: string;
  /**
   * If true, the link target will be opened in a new tab or window (depends on the browser setting).
   */
  openInNew?: boolean;
  /**
   * CSS styles passed to the anchor element.
   */
  style?: React.CSSProperties;
  /**
   * Defines when the underline is displayed.
   */
  underline?: 'none' | 'hover' | 'allways';
}

const Link: React.FC<LinkProps> = ({
  children = null,
  className = '',
  color = 'primary',
  openInNew = false,
  underline = 'hover',
  style = {},
  ...props
}) => {
  const getChildren = () =>
    typeof children === 'string' ? (
      <Styled.LinkText underline={underline} color={color} className={className} {...props}>
        {children}
      </Styled.LinkText>
    ) : (
      children
    );

  const getAnchorProps = () => {
    const props = {} as LinkProps & React.LinkHTMLAttributes<HTMLAnchorElement>;

    if (openInNew) {
      props.rel = 'noreferrer';
    }

    return props;
  };

  return (
    <Styled.LinkRoot
      {...getAnchorProps()}
      data-testid="jds-link"
      as={'a'}
      target={openInNew ? '_blank' : '_self'}
      underline={underline}
      className={className}
      style={style}
    >
      {getChildren()}
    </Styled.LinkRoot>
  );
};

export default Link;
