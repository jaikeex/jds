export interface Shape {
  borderRadius: BorderRadius;
}

export interface ShapeOptions {
  borderRadius: BorderRadiusOptions;
}

export interface BorderRadius {
  small: string;
  medium: string;
  large: string;
  fullRound: string;
}

export type BorderRadiusOptions = Partial<BorderRadius>;
