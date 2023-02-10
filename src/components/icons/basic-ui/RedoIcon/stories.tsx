import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { RedoIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Redo',
  component: RedoIcon
} as ComponentMeta<typeof RedoIcon>;

const Template: Story<SvgIconProps> = args => <RedoIcon {...args} />;

export const Redo = Template.bind({});
Redo.args = {};
