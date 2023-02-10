import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { AttachmentIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Attachment',
  component: AttachmentIcon
} as ComponentMeta<typeof AttachmentIcon>;

const Template: Story<SvgIconProps> = args => <AttachmentIcon {...args} />;

export const Attachment = Template.bind({});
Attachment.args = {};
