import type { Size } from 'core/types';

export interface OffsetAdjustmentValues {
  mark: OffsetAdjustmentOptions;
  rangeValueBox: OffsetAdjustmentOptions;
  rangeControl: OffsetAdjustmentOptions;
  standardValueBox: OffsetAdjustmentOptions;
}

export type OffsetAdjustmentOptions = Record<Size, number>;

const offsetAdjustmentValues: OffsetAdjustmentValues = {
  mark: {
    small: 7,
    medium: 10,
    large: 12
  },
  rangeValueBox: {
    small: 18,
    medium: 15,
    large: 14
  },
  rangeControl: {
    small: 6,
    medium: 8,
    large: 10
  },
  standardValueBox: {
    small: 18,
    medium: 15,
    large: 13
  }
};

export default offsetAdjustmentValues;
