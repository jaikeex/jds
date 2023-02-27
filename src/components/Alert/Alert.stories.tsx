import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { AlertProps } from './Alert';
import Alert from './Alert';
import { Button } from '@components/Button';
import { AlertProvider } from '@components/AlertProvider';
import { useAlert } from '@components/AlertProvider';
import { AppsIcon } from '@components/icons';

export default {
  title: 'Design System/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <AlertProvider>
        <Story />
      </AlertProvider>
    )
  ]
} as ComponentMeta<typeof Alert>;

const Template: Story<AlertProps> = (args) => {
  const { displayAlert } = useAlert();

  const defaultClickHandler = () => {
    displayAlert({
      ...args,
      message: 'This is an alert bar',
      action: <Button>Action</Button>,
      icon: <AppsIcon />
    });
  };

  const successClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - success variant',
      color: 'success'
    });
  };

  const dangerClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - danger variant',
      color: 'danger'
    });
  };

  const warningClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - warning variant',
      color: 'warning'
    });
  };

  const darkClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - dark variant',
      color: 'dark',
      icon: <AppsIcon />
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <Button onClick={defaultClickHandler}>Show Alert (default)</Button>
      <Button onClick={successClickHandler} color="success">
        Show Alert (success)
      </Button>
      <Button onClick={dangerClickHandler} color="danger">
        Show Alert (danger)
      </Button>
      <Button onClick={warningClickHandler} color="warning">
        Show Alert (warning)
      </Button>
      <Button onClick={darkClickHandler} appearance="outlined">
        Show Alert (dark)
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'This is an alert bar'
};
