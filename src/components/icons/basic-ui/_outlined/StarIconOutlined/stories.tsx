import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { StarIconOutlined } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Star',
  component: StarIconOutlined
} as ComponentMeta<typeof StarIconOutlined>;

const Template: Story<SvgIconProps> = args => <StarIconOutlined {...args} />;

export const Star = Template.bind({});
Star.args = {};
