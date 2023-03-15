export type RangeSliderSize = 'small' | 'medium' | 'large';

export interface RangeSliderValue {
  min: number;
  max: number;
}

export type RangeSliderClassKey =
  | 'root'
  | 'input'
  | 'inputMin'
  | 'inputMax'
  | 'inputWrapper'
  | 'selector'
  | 'selectorWrapper'
  | 'control'
  | 'controlWrapper'
  | 'track'
  | 'innerTrack'
  | 'valueBox'
  | 'label'
  | 'small'
  | 'medium'
  | 'large';
