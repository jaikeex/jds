import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { GithubIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Github',
  component: GithubIcon
} as ComponentMeta<typeof GithubIcon>;

const Template: Story<SvgIconProps> = args => <GithubIcon {...args} />;

export const Github = Template.bind({});
Github.args = {};
