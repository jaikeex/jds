import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { TabPanelProps } from './TabPanel';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: TabPanelProps) => ({
          flexGrow: 1,
          padding: [
            props.removeVerticalPadding ? 0 : theme.spacing.padding[4],
            props.removeHorizontalPadding ? 0 : theme.spacing.padding[4],
            props.removeVerticalPadding ? 0 : theme.spacing.padding[4],
            props.removeHorizontalPadding ? 0 : theme.spacing.padding[4]
          ]
        })
      },
      theme.overrides?.TabPanel || {}
    ),
  {
    name: 'jds-tab-panel'
  }
);
