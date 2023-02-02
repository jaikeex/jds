import { ButtonAppearance } from '@core/types';

export const useButtonGroupStyles = (
  orientation: 'horizontal' | 'vertical',
  appearance: ButtonAppearance
) => {
  const styleFirstElement: React.CSSProperties =
    orientation === 'horizontal'
      ? {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderRight: '1px solid #888888',
          marginRight: appearance === 'outlined' ? '-1px' : '0'
        }
      : {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottom: '1px solid #888888',
          marginBottom: appearance === 'outlined' ? '-1px' : '0'
        };

  const styleMiddleElement: React.CSSProperties =
    orientation === 'horizontal'
      ? {
          borderRadius: 0,
          borderRight: '1px solid #888888',
          marginRight: appearance === 'outlined' ? '-1px' : '0'
        }
      : {
          borderRadius: 0,
          borderBottom: '1px solid #888888',
          marginBottom: appearance === 'outlined' ? '-1px' : '0'
        };

  const styleLastElement: React.CSSProperties =
    orientation === 'horizontal'
      ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
      : { borderTopLeftRadius: 0, borderTopRightRadius: 0 };

  return { styleFirstElement, styleMiddleElement, styleLastElement };
};
