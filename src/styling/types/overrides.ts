import type { Styles } from 'react-jss';
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
  RangeSliderClassKey,
  CodeClassKey,
  TabsClassKey,
  TabPanelClassKey,
  ToggleButtonClassKey,
  ToggleButtonGroupClassKey,
  RadioClassKey
} from 'components';

export type Overrides<Props = unknown> = {
  [Name in keyof ComponentNameToClassKey]?: Partial<Styles<ComponentNameToClassKey[Name], Props, undefined>>;
};

export interface ComponentNameToClassKey {
  Alert: AlertClassKey;
  Backdrop: BackdropClassKey;
  Button: ButtonClassKey;
  ButtonGroup: ButtonGroupClassKey;
  Checkbox: CheckboxClassKey;
  Code: CodeClassKey;
  Dialog: DialogClassKey;
  Divider: DividerClassKey;
  Icon: IconClassKey;
  IconButton: IconButtonClassKey;
  Link: LinkClassKey;
  List: ListClassKey;
  ListItem: ListItemClassKey;
  Loader: LoaderClassKey;
  Menu: MenuClassKey;
  Radio: RadioClassKey;
  RangeSlider: RangeSliderClassKey;
  Select: SelectClassKey;
  Sheet: SheetClassKey;
  Slider: SliderClassKey;
  TabPanel: TabPanelClassKey;
  Tabs: TabsClassKey;
  TextField: TextFieldClassKey;
  ToggleButton: ToggleButtonClassKey;
  ToggleButtonGroup: ToggleButtonGroupClassKey;
  Tooltip: TooltipClassKey;
  Typography: TypographyClassKey;
}
