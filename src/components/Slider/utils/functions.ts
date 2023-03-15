export const calculateAbsolutePositionFraction = (value: number, min: number, max: number) =>
  (value - min) / (max - min);

export const calculateAbsolutePostionPercentage = (value: number, min: number, max: number) => {
  const fraction = calculateAbsolutePositionFraction(value, min, max);
  return fraction * 100;
};

export const calculateOffsetAdjustment = (value: number, min: number, max: number, coef: number) => {
  const fractFromCentre = (calculateAbsolutePositionFraction(value, min, max) - 0.5) * 2;
  return fractFromCentre * coef;
};
