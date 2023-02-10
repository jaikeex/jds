import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BlockIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Block',
  component: BlockIcon
} as ComponentMeta<typeof BlockIcon>;

const Template: Story<SvgIconProps> = args => <BlockIcon {...args} />;

export const Block = Template.bind({});
Block.args = {};
