import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { LanguageIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Language',
  component: LanguageIcon
} as ComponentMeta<typeof LanguageIcon>;

const Template: Story<SvgIconProps> = (args) => <LanguageIcon {...args} />;

export const Language = Template.bind({});
Language.args = {};
