import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { GraphqlIcon } from '.';
import { SvgColoredIconProps } from '@components/icons';

export default {
  title: 'Icons/Flat/Graphql',
  component: GraphqlIcon
} as ComponentMeta<typeof GraphqlIcon>;

const Template: Story<SvgColoredIconProps> = args => <GraphqlIcon {...args} />;

export const Graphql = Template.bind({});
Graphql.args = {};
