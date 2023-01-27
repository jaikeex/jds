import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { NextJsIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Next.js',
  component: NextJsIcon
} as ComponentMeta<typeof NextJsIcon>;

const Template: Story<IconProps> = args => <NextJsIcon {...args} />;

export const NextJs = Template.bind({});
NextJs.args = {};
NextJs.storyName = 'Next.js';
