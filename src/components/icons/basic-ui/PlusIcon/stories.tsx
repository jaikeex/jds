import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { PlusIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Plus',
  component: PlusIcon
} as ComponentMeta<typeof PlusIcon>;

const Template: Story<IconProps> = args => <PlusIcon {...args} />;

export const Plus = Template.bind({});
Plus.args = {};
