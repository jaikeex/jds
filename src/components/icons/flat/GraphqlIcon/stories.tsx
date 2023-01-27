import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { GraphqlIcon } from '.';
import { FlatIconProps } from '@components/icons/types';

export default {
  title: 'Icons/Flat/Graphql',
  component: GraphqlIcon
} as ComponentMeta<typeof GraphqlIcon>;

const Template: Story<FlatIconProps> = args => <GraphqlIcon {...args} />;

export const Graphql = Template.bind({});
Graphql.args = {};
