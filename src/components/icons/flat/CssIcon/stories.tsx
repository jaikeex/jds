import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { CssIcon } from '.';
import type { SvgColoredIconProps } from 'components/icons';

export default {
  title: 'Icons/Flat/CSS',
  component: CssIcon
} as ComponentMeta<typeof CssIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <CssIcon {...args} />;

export const CSS = Template.bind({});
CSS.args = {};
