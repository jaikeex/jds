type HtmlElements = Record<keyof JSX.IntrinsicElements, Style>;

export type StyleRules<ClassKey extends string = string> = Record<ClassKey, Style>;

export interface Style extends React.CSSProperties, Partial<Omit<HtmlElements, keyof React.CSSProperties>> {
  '*'?: Style;
  [key: `&${string}`]: Style;
  [key: `.${string}`]: Style;
}

export type ClassMap<ClassKey extends string = string> = Record<ClassKey, string>;

export type NonEmptyString<T extends string> = '' extends T ? never : T;
