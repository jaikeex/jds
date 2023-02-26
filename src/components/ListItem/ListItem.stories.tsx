import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import ListItem, { ListItemProps } from './ListItem';
import { Typography } from '@components/Typography';
import { EmailIcon } from '@components/icons';

export default {
  title: 'Design System/ListItem',
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template: Story<ListItemProps> = args => {
  return (
    <div style={{ width: '300px' }}>
      <ListItem {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <Typography>This is a list item</Typography>,
  elementBefore: <EmailIcon />,
  elementAfter: <EmailIcon />
};