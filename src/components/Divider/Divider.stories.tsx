import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Divider, { DividerProps } from './Divider';

export default {
  title: 'Divider',
  component: Divider
} as ComponentMeta<typeof Divider>;

const Template: Story<DividerProps> = args => {
  const styles =
    args.orientation === 'horizontal'
      ? { width: '400px' }
      : { height: '400px' };

  return (
    <div style={styles}>
      <Divider {...args} />
    </div>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal'
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical'
};
