import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CompressIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Compress',
  component: CompressIcon
} as ComponentMeta<typeof CompressIcon>;

const Template: Story<SvgIconProps> = args => <CompressIcon {...args} />;

export const Compress = Template.bind({});
Compress.args = {};
