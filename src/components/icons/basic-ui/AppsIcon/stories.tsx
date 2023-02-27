import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { AppsIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Apps',
  component: AppsIcon
} as ComponentMeta<typeof AppsIcon>;

const Template: Story<SvgIconProps> = (args) => <AppsIcon {...args} />;

export const Apps = Template.bind({});
Apps.args = {};
