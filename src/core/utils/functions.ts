import type { Size, ExtendedSize, ColorVariants } from 'core/types';
import type { Classes } from 'jss';

export const makeId = (length: number) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const classNameSize = (baseClass: string, sizeProp: Size | ExtendedSize) => `${baseClass}--size--${sizeProp}`;

export const classNameColor = (baseClass: string, colorProp: ColorVariants | `#${string}`) =>
  colorProp.startsWith('#') ? '' : `${baseClass}--color--${colorProp}`;

export const mergeClasses = <C extends string = string>(
  defaultClasses: Classes<C>,
  userClasses: Partial<Classes<C>>
) => {
  const mergedClasses = {} as Classes<C>;

  Object.entries(userClasses).forEach(
    ([key, value]) => (mergedClasses[key as C] = defaultClasses[key as C].concat(' ', value as string))
  );
  return { ...defaultClasses, ...mergedClasses };
};
