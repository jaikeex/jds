import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { MongoDbIcon } from '.';
import type { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/MongoDB',
  component: MongoDbIcon
} as ComponentMeta<typeof MongoDbIcon>;

const Template: Story<SvgColoredIconProps> = (args) => <MongoDbIcon {...args} />;

export const MongoDB = Template.bind({});
MongoDB.args = {};
