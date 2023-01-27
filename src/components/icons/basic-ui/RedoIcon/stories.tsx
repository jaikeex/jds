import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { RedoIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Redo',
  component: RedoIcon
} as ComponentMeta<typeof RedoIcon>;

const Template: Story<IconProps> = args => <RedoIcon {...args} />;

export const Redo = Template.bind({});
Redo.args = {};
