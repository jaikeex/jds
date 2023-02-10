import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { EditIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Edit',
  component: EditIcon
} as ComponentMeta<typeof EditIcon>;

const Template: Story<SvgIconProps> = args => <EditIcon {...args} />;

export const Edit = Template.bind({});
Edit.args = {};
