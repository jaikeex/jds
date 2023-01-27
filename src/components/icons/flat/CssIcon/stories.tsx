import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CssIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/CSS',
  component: CssIcon
} as ComponentMeta<typeof CssIcon>;

const Template: Story<FlatIconProps> = args => <CssIcon {...args} />;

export const CSS = Template.bind({});
CSS.args = {};
