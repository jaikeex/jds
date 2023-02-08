type LessThan<N extends number, A extends any[] = []> = N extends A['length']
  ? A[number]
  : LessThan<N, [...A, A['length']]>;

export type NumericRange<F extends number, T extends number> = Exclude<
  T | LessThan<T>,
  LessThan<F>
>;
