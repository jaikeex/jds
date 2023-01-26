import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card
} as Meta;

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
