import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BlockIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Block',
  component: BlockIcon
} as ComponentMeta<typeof BlockIcon>;

const Template: Story<IconProps> = args => <BlockIcon {...args} />;

export const Block = Template.bind({});
Block.args = {};
