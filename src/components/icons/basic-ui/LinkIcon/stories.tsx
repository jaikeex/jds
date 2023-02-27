import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { LinkIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Link',
  component: LinkIcon
} as ComponentMeta<typeof LinkIcon>;

const Template: Story<SvgIconProps> = (args) => <LinkIcon {...args} />;

export const Link = Template.bind({});
Link.args = {};
