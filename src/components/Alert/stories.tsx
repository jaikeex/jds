import React, { useEffect, useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Alert, { AlertProps } from '.';
import Button from '@components/Button';
import AlertProvider from '../AlertProvider';
import { useAlert } from '../AlertProvider/useAlert';
import { AppsIcon } from '../icons';

export default {
  title: 'Design System/Alert',
  component: Alert,
  decorators: [
    Story => (
      <AlertProvider>
        <Story />
      </AlertProvider>
    )
  ]
} as ComponentMeta<typeof Alert>;

const Template: Story<AlertProps> = args => {
  const { displayAlert } = useAlert();

  const defaultClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar',
      action: <Button>Action</Button>,
      icon: <AppsIcon />
    });
  };

  const successClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - success variant',
      appearance: 'success'
    });
  };

  const dangerClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - danger variant',
      appearance: 'danger'
    });
  };

  const warningClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - warning variant',
      appearance: 'warning'
    });
  };

  const darkClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - dark variant',
      appearance: 'dark',
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
