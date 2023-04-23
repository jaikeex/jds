import {
  calculateAbsolutePositionFraction,
  calculateAbsolutePostionPercentage,
  calculateOffsetAdjustment
} from './functions';

describe('calculateAbsolutePositionFraction', () => {
  it('should return 0 for min and max values when input value is min', () => {
    expect(calculateAbsolutePositionFraction(0, 0, 10)).toBe(0);
  });

  it('should return 1 for min and max values when input value is max', () => {
    expect(calculateAbsolutePositionFraction(10, 0, 10)).toBe(1);
  });

  it('should return 0.5 when value is in the middle of min and max', () => {
    expect(calculateAbsolutePositionFraction(5, 0, 10)).toBe(0.5);
  });
});

describe('calculateAbsolutePostionPercentage', () => {
  it('should return 0 for min and max values when input value is min', () => {
    expect(calculateAbsolutePostionPercentage(0, 0, 10)).toBe(0);
  });

  it('should return 100 for min and max values when input value is max', () => {
    expect(calculateAbsolutePostionPercentage(10, 0, 10)).toBe(100);
  });

  it('should return 50 when value is in the middle of min and max', () => {
    expect(calculateAbsolutePostionPercentage(5, 0, 10)).toBe(50);
  });
});

describe('calculateOffsetAdjustment', () => {
  it('should return 0 when input value is the middle of min and max', () => {
    expect(calculateOffsetAdjustment(5, 0, 10, 1)).toBe(0);
  });

  it('should return a positive value when input value is closer to max than min', () => {
    expect(calculateOffsetAdjustment(8, 0, 10, 1)).toBeGreaterThan(0);
  });

  it('should return a negative value when input value is closer to min than max', () => {
    expect(calculateOffsetAdjustment(2, 0, 10, 1)).toBeLessThan(0);
  });
});
