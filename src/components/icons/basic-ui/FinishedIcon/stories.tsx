import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { FinishedIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Finished',
  component: FinishedIcon
} as ComponentMeta<typeof FinishedIcon>;

const Template: Story<SvgIconProps> = args => <FinishedIcon {...args} />;

export const Finished = Template.bind({});
Finished.args = {};
