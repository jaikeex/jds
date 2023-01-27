import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UndoIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Undo',
  component: UndoIcon
} as ComponentMeta<typeof UndoIcon>;

const Template: Story<IconProps> = args => <UndoIcon {...args} />;

export const Undo = Template.bind({});
Undo.args = {};
