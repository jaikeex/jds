import type {
  ButtonClassKey,
  AlertClassKey,
  SheetClassKey,
  TextFieldClassKey,
  TooltipClassKey,
  TypographyClassKey,
  IconClassKey
} from 'components';
import type { Styles } from 'react-jss';

export type Overrides<Props = unknown> = {
  [Name in keyof ComponentNameToClassKey]?: Partial<Styles<ComponentNameToClassKey[Name], Props, undefined>>;
};

export interface ComponentNameToClassKey {
  Alert: AlertClassKey;
  Button: ButtonClassKey;
  Icon: IconClassKey;
  Sheet: SheetClassKey;
  TextField: TextFieldClassKey;
  Tooltip: TooltipClassKey;
  Typography: TypographyClassKey;
}
