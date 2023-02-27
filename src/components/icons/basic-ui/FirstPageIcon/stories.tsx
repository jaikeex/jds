import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { FirstPageIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/FirstPage',
  component: FirstPageIcon
} as ComponentMeta<typeof FirstPageIcon>;

const Template: Story<SvgIconProps> = (args) => <FirstPageIcon {...args} />;

export const FirstPage = Template.bind({});
FirstPage.args = {};
