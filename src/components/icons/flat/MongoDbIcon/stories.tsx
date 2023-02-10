import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { MongoDbIcon } from '.';
import { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/MongoDB',
  component: MongoDbIcon
} as ComponentMeta<typeof MongoDbIcon>;

const Template: Story<SvgColoredIconProps> = args => <MongoDbIcon {...args} />;

export const MongoDB = Template.bind({});
MongoDB.args = {};
