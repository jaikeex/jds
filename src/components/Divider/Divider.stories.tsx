import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { DividerProps } from './Divider';
import Divider from './Divider';

export default {
  title: 'Design System/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>;

const Template: Story<DividerProps> = (args) => {
  const styles = args.orientation === 'horizontal' ? { width: '400px' } : { height: '400px' };

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
