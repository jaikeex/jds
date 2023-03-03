import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { PlusIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Plus',
  component: PlusIcon
} as ComponentMeta<typeof PlusIcon>;

const Template: Story<SvgIconProps> = (args) => <PlusIcon {...args} />;

export const Plus = Template.bind({});
Plus.args = {};
