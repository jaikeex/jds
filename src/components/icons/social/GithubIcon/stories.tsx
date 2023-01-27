import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { GithubIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Github',
  component: GithubIcon
} as ComponentMeta<typeof GithubIcon>;

const Template: Story<IconProps> = args => <GithubIcon {...args} />;

export const Github = Template.bind({});
Github.args = {};
