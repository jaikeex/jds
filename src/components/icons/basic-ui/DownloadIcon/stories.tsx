import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { DownloadIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Download',
  component: DownloadIcon
} as ComponentMeta<typeof DownloadIcon>;

const Template: Story<SvgIconProps> = (args) => <DownloadIcon {...args} />;

export const Download = Template.bind({});
Download.args = {};
