import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UploadIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Upload',
  component: UploadIcon
} as ComponentMeta<typeof UploadIcon>;

const Template: Story<IconProps> = args => <UploadIcon {...args} />;

export const Upload = Template.bind({});
Upload.args = {};
