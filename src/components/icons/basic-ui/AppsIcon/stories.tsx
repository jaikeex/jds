import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { AppsIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Apps',
  component: AppsIcon
} as ComponentMeta<typeof AppsIcon>;

const Template: Story<IconProps> = args => <AppsIcon {...args} />;

export const Apps = Template.bind({});
Apps.args = {};
