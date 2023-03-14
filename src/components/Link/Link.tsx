import React from 'react';
import type { ThemeColorVariants, TypographyVariants } from 'core/types';
import { Typography } from 'components/Typography';
import type { LinkClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface LinkProps extends React.PropsWithChildren {
  color?: ThemeColorVariants;
  className?: string;
  classes?: Classes<LinkClassKey>;
  href?: string;
  level?: TypographyVariants;
  openInNew?: boolean;
  style?: React.CSSProperties;
  underline?: 'none' | 'hover' | 'allways';
}

const Link: React.FC<LinkProps> = ({
  children = null,
  className = '',
  classes = {},
  color = 'primary',
  level = 'body1',
  openInNew = false,
  underline = 'hover',
  ...anchorProps
}) => {
  const classNames = classes ? mergeClasses(useStyles({ underline }), classes) : useStyles({ underline });

  const getChildren = () =>
    typeof children === 'string' ? (
      <Typography variant={level} color={color} className={clsx(classNames.root, className)}>
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
    <a {...getAnchorProps()} target={openInNew ? '_blank' : '_self'} className={clsx(classNames.root, className)}>
      {getChildren()}
    </a>
  );
};

export default Link;
