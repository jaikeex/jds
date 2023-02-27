import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { DeleteIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Delete',
  component: DeleteIcon
} as ComponentMeta<typeof DeleteIcon>;

const Template: Story<SvgIconProps> = (args) => <DeleteIcon {...args} />;

export const Delete = Template.bind({});
Delete.args = {};
