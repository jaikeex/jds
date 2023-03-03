import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { UploadIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Upload',
  component: UploadIcon
} as ComponentMeta<typeof UploadIcon>;

const Template: Story<SvgIconProps> = (args) => <UploadIcon {...args} />;

export const Upload = Template.bind({});
Upload.args = {};
