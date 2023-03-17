import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { TabsProps } from './Tabs';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        },
        buttonPanel: (props: TabsProps) => ({
          position: 'relative',
          flexGrow: 0,
          padding: [
            0,
            props.scrollButtons === 'allways'
              ? theme.spacing.padding[24]
              : props.removeHorizontalPadding
              ? 0
              : theme.spacing.padding[4]
          ],
          display: 'flex',
          justifyContent: props.justifyButtons || 'flex-start',
          overflowX: 'auto',
          overFlowY: 'hidden',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '& > *': {
            flexGrow: props.justifyButtons === 'stretch' ? 1 : 0
          }
        }),
        tabPanel: {
          flexGrow: 1,
          '& > *:first-child': {
            height: '100%'
          }
        },
        scrollButtonWrapper: {
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 100,
          width: '3rem',
          backgroundColor: theme.palette.background.default
        },
        scrollButton: {
          //borderRadius: 0
        },
        scrollButtonRight: {
          paddingLeft: '0.5rem'
        },
        scrollButtonLeft: {
          paddingRight: '0.5rem'
        }
      },
      theme.overrides?.Tabs || {}
    ),
  {
    name: 'jds-tabs'
  }
);
