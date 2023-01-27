import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { FirstPageIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/FirstPage',
  component: FirstPageIcon
} as ComponentMeta<typeof FirstPageIcon>;

const Template: Story<IconProps> = args => <FirstPageIcon {...args} />;

export const FirstPage = Template.bind({});
FirstPage.args = {};
