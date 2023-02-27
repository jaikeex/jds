import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { CompressIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Compress',
  component: CompressIcon
} as ComponentMeta<typeof CompressIcon>;

const Template: Story<SvgIconProps> = (args) => <CompressIcon {...args} />;

export const Compress = Template.bind({});
Compress.args = {};
