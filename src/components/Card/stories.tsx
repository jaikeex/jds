import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Card, { CardProps } from '.';
import CardHeader from '@components/CardHeader';
import { HomeIcon, SearchIcon } from '@components/icons';

export default {
  title: 'Design System/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: {
    width: '250px',
    height: '350px',
    top: '-200px',
    left: '-100px'
  }
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  appearance: 'outlined'
};

export const SharpCorners = Template.bind({});
SharpCorners.args = {
  ...Default.args,
  sharpCorners: true
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  ...Default.args,
  hasShadow: true
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...Default.args,
  clickable: true
};

export const Flippable = Template.bind({});
Flippable.args = {
  ...Default.args,
  children: <div style={{ textAlign: 'center' }}>This is the frontside</div>,
  backside: <div style={{ textAlign: 'center' }}>This is the backside</div>
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  ...Default.args,
  children: (
    <CardHeader
      title={'Card title'}
      subtitle={'Card sub-title'}
      rightAction={<SearchIcon />}
      leftAction={<HomeIcon />}
    />
  )
};
