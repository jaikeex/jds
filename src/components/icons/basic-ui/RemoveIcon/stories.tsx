import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { RemoveIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Remove',
  component: RemoveIcon
} as ComponentMeta<typeof RemoveIcon>;

const Template: Story<SvgIconProps> = (args) => <RemoveIcon {...args} />;

export const Remove = Template.bind({});
Remove.args = {};
