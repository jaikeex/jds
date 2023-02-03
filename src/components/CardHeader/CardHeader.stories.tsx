import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import CardHeader, { CardHeaderProps } from './CardHeader';
import { HomeIcon, SearchIcon } from '@components/icons';

export default {
  title: 'Design System/Card/CardHeader',
  component: CardHeader
} as ComponentMeta<typeof CardHeader>;

const Template: Story<CardHeaderProps> = args => <CardHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '250px' },
  title: 'Card title',
  subtitle: 'Card sub-title',
  rightAction: <HomeIcon />,
  leftAction: <SearchIcon />
};
