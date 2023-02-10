import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UndoIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Undo',
  component: UndoIcon
} as ComponentMeta<typeof UndoIcon>;

const Template: Story<SvgIconProps> = args => <UndoIcon {...args} />;

export const Undo = Template.bind({});
Undo.args = {};
