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
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
}
