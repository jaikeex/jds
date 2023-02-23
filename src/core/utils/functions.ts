import { Size, ExtendedSize, ColorVariants } from '@core/types';

export const makeId = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const classNameSize = (
  baseClass: string,
  sizeProp: Size | ExtendedSize
) => {
  return `${baseClass}--size--${sizeProp}`;
};

export const classNameColor = (
  baseClass: string,
  colorProp: ColorVariants | `#${string}`
) => {
  return colorProp.startsWith('#') ? '' : `${baseClass}--color--${colorProp}`;
};
