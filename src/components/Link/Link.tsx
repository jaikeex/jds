import React from 'react';
import './Link.styles.scss';
import type { ThemeColorVariants, TypographyVariants } from 'core/types';
import classNames from 'classnames';
import { Typography } from 'components/Typography';

export interface LinkProps extends React.PropsWithChildren {
  color?: ThemeColorVariants;
  href?: string;
  level?: TypographyVariants;
  openInNew?: boolean;
  style?: React.CSSProperties;
  underline?: 'none' | 'hover' | 'allways';
}

const Link: React.FC<LinkProps> = ({
  children = null,
  color = 'primary',
  level = 'body1',
  openInNew = false,
  underline = 'hover',
  ...anchorProps
}) => {
  const classes = classNames('jds-link', `jds-link--underline--${underline}`);

  const getChildren = () =>
    typeof children === 'string' ? (
      <Typography variant={level} color={color} className={classes}>
        {children}
      </Typography>
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
    <a {...getAnchorProps()} target={openInNew ? '_blank' : '_self'} className={classes}>
      {getChildren()}
    </a>
  );
};

export default Link;
