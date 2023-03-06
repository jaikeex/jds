export interface Spacing {
  margin: SpacingSizes;
  padding: SpacingSizes;
}

export interface SpacingOptions {
  margin?: SpacingSizesOptions;
  padding?: SpacingSizesOptions;
}

export type SpacingSizesOptions = Partial<SpacingSizes>;

export interface SpacingSizes {
  xxxsmall: string | number;
  xxsmall: string | number;
  xsmall: string | number;
  small: string | number;
  medium: string | number;
  large: string | number;
  xlarge: string | number;
  xxlarge: string | number;
  xxxlarge: string | number;
}
