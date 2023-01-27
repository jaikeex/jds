import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { EditIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Edit',
  component: EditIcon
} as ComponentMeta<typeof EditIcon>;

const Template: Story<IconProps> = args => <EditIcon {...args} />;

export const Edit = Template.bind({});
Edit.args = {};
