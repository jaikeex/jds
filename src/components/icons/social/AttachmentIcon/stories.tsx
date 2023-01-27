import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { AttachmentIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Attachment',
  component: AttachmentIcon
} as ComponentMeta<typeof AttachmentIcon>;

const Template: Story<IconProps> = args => <AttachmentIcon {...args} />;

export const Attachment = Template.bind({});
Attachment.args = {};
