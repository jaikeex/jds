import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HtmlIcon } from '.';
import type { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/HTML',
  component: HtmlIcon
} as ComponentMeta<typeof HtmlIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <HtmlIcon {...args} />;

export const HTML = Template.bind({});
HTML.args = {};
