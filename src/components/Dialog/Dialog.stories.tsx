import React, { useState } from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { DialogProps } from './Dialog';
import Dialog from './Dialog';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

export default {
  title: 'Design System/Dialog',
  component: Dialog
} as ComponentMeta<typeof Dialog>;

const Template: Story<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ width: '30rem' }}>
          <Typography gutterBottom textAlign="center" variant="h5">
            This is a dialog!
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio
            bibendum justo, vel imperdiet sapien wisi sed libero. Maecenas fermentum, sem in pharetra pellentesque,
            velit turpis volutpat ante, in pharetra metus odio a lectus. Fusce nibh. Integer lacinia. Donec quis nibh at
            felis congue commodo. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.
          </Typography>
          <div style={{ display: 'flex', marginTop: '1rem' }}>
            <Button style={{ marginLeft: 'auto' }} onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
