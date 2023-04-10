import React from 'react';
import type { ThemeColorVariants } from 'core/types';
import * as Styled from './styles';
import type { TypographyVariants } from 'components/Typography';

export interface LinkProps extends React.PropsWithChildren {
  color?: ThemeColorVariants;
  className?: string;
  href?: string;
  level?: TypographyVariants;
  openInNew?: boolean;
  style?: React.CSSProperties;
  underline?: 'none' | 'hover' | 'allways';
}

const Link: React.FC<LinkProps> = ({
  children = null,
  className = '',
  color = 'primary',
  level = 'body1',
  openInNew = false,
  underline = 'hover',
  ...anchorProps
}) => {
  const getChildren = () =>
    typeof children === 'string' ? (
      <Styled.LinkText variant={level} underline={underline} color={color} className={className}>
        {children}
      </Styled.LinkText>
    ) : (
      children
    );

  const getAnchorProps = () => {
    const props = { ...anchorProps } as LinkProps & React.LinkHTMLAttributes<HTMLAnchorElement>;

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
    >
      {getChildren()}
    </Styled.LinkRoot>
  );
};

export default Link;
