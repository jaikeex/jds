import { ColorVariants } from '@core/types';
import React from 'react';
import './Link.styles.scss';
import classNames from 'classnames';
import { TypographyVariants } from '@core/types';
import { Typography } from '../Typography';

export interface LinkProps extends React.PropsWithChildren {
  color?: ColorVariants | `#${string}`;
  href?: string;
  level?: TypographyVariants;
  openInNew?: boolean;
  style?: React.CSSProperties;
  underline?: 'none' | 'hover' | 'allways';
}

const Link: React.FC<LinkProps> = ({
  children = null,
  color = 'accented',
  href = '#',
  level = 'body1',
  openInNew = false,
  style = {},
  underline = 'hover'
}) => {
  const classes = classNames('jds-link', `jds-link--underline--${underline}`);

  const getChildren = () => {
    return typeof children === 'string' ? (
      <Typography variant={level} color={color} className={classes}>
        {children}
      </Typography>
    ) : (
      children
    );
  };

  return (
    <a
      href={href}
      target={openInNew ? '_blank' : '_self'}
      className={classes}
      style={style}
    >
      {getChildren()}
    </a>
  );
};

export default Link;
