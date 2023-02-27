import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { UpArrowIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/UpArrow',
  component: UpArrowIcon
} as ComponentMeta<typeof UpArrowIcon>;

const Template: Story<SvgIconProps> = (args) => <UpArrowIcon {...args} />;

export const UpArrow = Template.bind({});
UpArrow.args = {};
