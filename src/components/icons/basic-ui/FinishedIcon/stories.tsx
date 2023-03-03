import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { FinishedIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Finished',
  component: FinishedIcon
} as ComponentMeta<typeof FinishedIcon>;

const Template: Story<SvgIconProps> = (args) => <FinishedIcon {...args} />;

export const Finished = Template.bind({});
Finished.args = {};
