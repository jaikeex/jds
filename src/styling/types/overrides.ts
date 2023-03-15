import type {
  ButtonClassKey,
  AlertClassKey,
  SheetClassKey,
  TextFieldClassKey,
  TooltipClassKey,
  TypographyClassKey,
  IconClassKey,
  SelectClassKey,
  MenuClassKey,
  ListClassKey,
  ListItemClassKey,
  LinkClassKey,
  IconButtonClassKey,
  DividerClassKey,
  BackdropClassKey,
  DialogClassKey,
  CheckboxClassKey,
  ButtonGroupClassKey,
  LoaderClassKey,
  SliderClassKey,
  RangeSliderClassKey
} from 'components';
import type { Styles } from 'react-jss';

export type Overrides<Props = unknown> = {
  [Name in keyof ComponentNameToClassKey]?: Partial<Styles<ComponentNameToClassKey[Name], Props, undefined>>;
};

export interface ComponentNameToClassKey {
  Alert: AlertClassKey;
  Backdrop: BackdropClassKey;
  Button: ButtonClassKey;
  ButtonGroup: ButtonGroupClassKey;
  Checkbox: CheckboxClassKey;
  Dialog: DialogClassKey;
  Divider: DividerClassKey;
  Icon: IconClassKey;
  IconButton: IconButtonClassKey;
  Link: LinkClassKey;
  List: ListClassKey;
  ListItem: ListItemClassKey;
  Loader: LoaderClassKey;
  Menu: MenuClassKey;
  RangeSlider: RangeSliderClassKey;
  Select: SelectClassKey;
  Sheet: SheetClassKey;
  Slider: SliderClassKey;
  TextField: TextFieldClassKey;
  Tooltip: TooltipClassKey;
  Typography: TypographyClassKey;
}
