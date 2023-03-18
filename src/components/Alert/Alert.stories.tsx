import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { AlertProps } from './Alert';
import Alert from './Alert';
import { Button } from 'components/Button';
import { AlertProvider } from 'components/AlertProvider';
import { useAlert } from 'components/AlertProvider';
import { AppsIcon } from 'components/icons';

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
      message: 'This is an alert bar'
    });
  };

  const actionClickHandler = () => {
    displayAlert({
      ...args,
      message: 'This is an alert bar',
      action: <Button>Action</Button>,
      icon: <AppsIcon />
    });
  };

  const withMessageClickHandler = () => {
    displayAlert({
      title: 'Title',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati accusantium tempore dolor doloribus, explicabo accusamus illum praesentium exercitationem eveniet veritatis, at non animi fugit officiis!',
      color: 'secondary',
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
      message: 'This is an alert bar - error variant',
      color: 'error'
    });
  };

  const warningClickHandler = () => {
    displayAlert({
      message: 'This is an alert bar - warning variant',
      color: 'warning'
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <Button onClick={defaultClickHandler}>Show alert</Button>
      <Button onClick={actionClickHandler}>Show alert with action</Button>
      <Button onClick={withMessageClickHandler} color="secondary">
        Show Alert With Title and Message
      </Button>
      <Button onClick={successClickHandler} color="success">
        Show Alert (success)
      </Button>
      <Button onClick={dangerClickHandler} color="error">
        Show Alert (error)
      </Button>
      <Button onClick={warningClickHandler} color="warning">
        Show Alert (warning)
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Alert';
