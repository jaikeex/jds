export const typographyVariantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subHeading1: 'h6',
  subHeading2: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption: 'p',
  label: 'span',
  button: 'span'
};

export type TypographyVariants = keyof typeof typographyVariantMap;
