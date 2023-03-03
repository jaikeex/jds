import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { GithubIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Social/Github',
  component: GithubIcon
} as ComponentMeta<typeof GithubIcon>;

const Template: Story<SvgIconProps> = (args) => <GithubIcon {...args} />;

export const Github = Template.bind({});
Github.args = {};
