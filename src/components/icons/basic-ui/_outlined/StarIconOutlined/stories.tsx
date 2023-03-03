import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { StarIconOutlined } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Star',
  component: StarIconOutlined
} as ComponentMeta<typeof StarIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <StarIconOutlined {...args} />;

export const Star = Template.bind({});
Star.args = {};
