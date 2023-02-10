import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { DeleteIconOutlined } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Delete',
  component: DeleteIconOutlined
} as ComponentMeta<typeof DeleteIconOutlined>;

const Template: Story<SvgIconProps> = args => <DeleteIconOutlined {...args} />;

export const Delete = Template.bind({});
Delete.args = {};
