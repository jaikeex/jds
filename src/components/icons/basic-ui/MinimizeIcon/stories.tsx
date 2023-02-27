import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { MinimizeIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Minimize',
  component: MinimizeIcon
} as ComponentMeta<typeof MinimizeIcon>;

const Template: Story<SvgIconProps> = (args) => <MinimizeIcon {...args} />;

export const Minimize = Template.bind({});
Minimize.args = {};
