import React, { useEffect, useState } from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import ToggleButtonGroup from './ToggleButtonGroup';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup';
import { ToggleButton } from 'components/ToggleButton';
import { DarkModeIcon, LightModeIcon, StarIcon } from 'components/icons';

export default {
  title: 'Design System/ToggleButtonGroup',
  component: ToggleButtonGroup,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: Story<ToggleButtonGroupProps> = (args) => {
  const [value, setValue] = useState<string | string[]>([]);

  const valueChangeHandler = (event: React.MouseEvent<HTMLButtonElement>, value: string | string[] | null) => {
    event.preventDefault();
    console.log(value);
    value && setValue(value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <ToggleButtonGroup {...args} onChange={valueChangeHandler}>
      <ToggleButton value="first">
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value="second">
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value="third">
        <StarIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Exclusive = Template.bind({});
Exclusive.args = {
  ...Default.args,
  exclusive: true
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  orientation: 'vertical'
};

export const WithoutBorders = Template.bind({});
WithoutBorders.args = {
  ...Default.args,
  removeBorder: true
};

export const VerticalWithoutBorders = Template.bind({});
VerticalWithoutBorders.args = {
  ...Default.args,
  orientation: 'vertical',
  removeBorder: true
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: 'primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};
