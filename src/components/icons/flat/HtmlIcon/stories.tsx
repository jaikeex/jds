import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { HtmlIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/HTML',
  component: HtmlIcon
} as ComponentMeta<typeof HtmlIcon>;

const Template: Story<FlatIconProps> = args => <HtmlIcon {...args} />;

export const HTML = Template.bind({});
HTML.args = {};
