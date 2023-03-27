import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { SnackbarProps } from './Snackbar';
import Snackbar from './Snackbar';
import { Button } from 'components/Button';
import { SnackbarProvider, useSnackbar } from 'components/SnackbarProvider';
import { AppsIcon } from 'components/icons';

export default {
  title: 'Design System/Snackbar',
  component: Snackbar,
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    )
  ]
} as ComponentMeta<typeof Snackbar>;

const DefaultTemplate: Story<SnackbarProps> = () => {
  const displaySnackbar = useSnackbar();

  const defaultClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar'
    });
  };

  return <Button onClick={defaultClickHandler}>Show snackbar</Button>;
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

const ColorsTemplate: Story<SnackbarProps> = () => {
  const displaySnackbar = useSnackbar();

  const primaryClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar - primary variant',
      color: 'primary'
    });
  };

  const secondaryClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar - secondary variant',
      color: 'secondary'
    });
  };

  const successClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar - success variant',
      color: 'success'
    });
  };

  const errorClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar - error variant',
      color: 'error'
    });
  };

  const warningClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar - warning variant',
      color: 'warning'
    });
  };

  const infoClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar - info variant',
      color: 'info'
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxWidth: '20rem' }}>
      <Button onClick={primaryClickHandler} color="primary">
        Show snackbar (primary)
      </Button>
      <Button onClick={secondaryClickHandler} color="secondary">
        Show snackbar (secondary)
      </Button>
      <Button onClick={successClickHandler} color="success">
        Show snackbar (success)
      </Button>
      <Button onClick={errorClickHandler} color="error">
        Show snackbar (error)
      </Button>
      <Button onClick={warningClickHandler} color="warning">
        Show snackbar (warning)
      </Button>
      <Button onClick={infoClickHandler} color="info">
        Show snackbar (info)
      </Button>
    </div>
  );
};

export const Colors = ColorsTemplate.bind({});
Colors.args = {};

const ActionTemplate: Story<SnackbarProps> = () => {
  const displaySnackbar = useSnackbar();

  const defaultClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar',
      action: <Button size="small">Action</Button>
    });
  };

  return <Button onClick={defaultClickHandler}>Show snackbar with action</Button>;
};

export const Action = ActionTemplate.bind({});
Action.args = {};

const IconTemplate: Story<SnackbarProps> = () => {
  const displaySnackbar = useSnackbar();

  const defaultClickHandler = () => {
    displaySnackbar({
      message: 'This is a snackbar',
      icon: <AppsIcon />
    });
  };

  return <Button onClick={defaultClickHandler}>Show snackbar</Button>;
};

export const Icon = IconTemplate.bind({});
Icon.args = {};
