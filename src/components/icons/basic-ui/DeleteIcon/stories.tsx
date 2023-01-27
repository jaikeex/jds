import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { DeleteIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Delete',
  component: DeleteIcon
} as ComponentMeta<typeof DeleteIcon>;

const Template: Story<IconProps> = args => <DeleteIcon {...args} />;

export const Delete = Template.bind({});
Delete.args = {};
