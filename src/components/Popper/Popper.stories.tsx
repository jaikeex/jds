import React, { useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Popper, { PopperProps } from './Popper';
import { Button } from '../Button';
import { Sheet } from '../Sheet';

export default {
  title: 'Design System/Popper',
  component: Popper
} as ComponentMeta<typeof Popper>;

const Template: Story<PopperProps> = args => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>(null);

  return (
    <div style={{ width: '200px', position: 'relative' }}>
      <Button ref={setReferenceElement} size="small">
        Show Popper
      </Button>

      <Popper {...args} referenceElement={referenceElement}>
        <Sheet style={{ width: '100%' }}>Tooltip</Sheet>
      </Popper>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};