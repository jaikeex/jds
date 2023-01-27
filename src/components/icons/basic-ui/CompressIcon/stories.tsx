import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CompressIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Compress',
  component: CompressIcon
} as ComponentMeta<typeof CompressIcon>;

const Template: Story<IconProps> = args => <CompressIcon {...args} />;

export const Compress = Template.bind({});
Compress.args = {};
