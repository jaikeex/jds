import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { MongoDbIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/MongoDB',
  component: MongoDbIcon
} as ComponentMeta<typeof MongoDbIcon>;

const Template: Story<FlatIconProps> = args => <MongoDbIcon {...args} />;

export const MongoDB = Template.bind({});
MongoDB.args = {};
