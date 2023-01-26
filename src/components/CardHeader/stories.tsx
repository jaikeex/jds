import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardHeader, CardHeaderProps } from '.';
import { ContactMeIcon, DarkModeIcon } from '@components/icons';

export default {
  title: 'CardHeader',
  component: CardHeader
} as Meta;

const Template: Story<CardHeaderProps> = args => <CardHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: { width: '250px' },
  title: 'Card title',
  subtitle: 'Card sub-title',
  rightAction: <ContactMeIcon />,
  leftAction: <DarkModeIcon />
};
