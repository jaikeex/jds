import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LastPageIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/LastPage',
  component: LastPageIcon
} as ComponentMeta<typeof LastPageIcon>;

const Template: Story<IconProps> = args => <LastPageIcon {...args} />;

export const LastPage = Template.bind({});
LastPage.args = {};
