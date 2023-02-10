import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LastPageIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/LastPage',
  component: LastPageIcon
} as ComponentMeta<typeof LastPageIcon>;

const Template: Story<SvgIconProps> = args => <LastPageIcon {...args} />;

export const LastPage = Template.bind({});
LastPage.args = {};
