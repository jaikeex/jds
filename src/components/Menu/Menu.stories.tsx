import React, { useState } from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { MenuProps } from './Menu';
import Menu from './Menu';
import { Button } from 'components/Button';
import type { MenuItemProps } from 'components/MenuItem';
import { MenuItem } from 'components/MenuItem';
import { Typography } from 'components/Typography';
import { DeleteIcon, EditIcon, MoreHorizontalIcon } from 'components/icons';

export default {
  title: 'Design System/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const generateMenuItems = (props: MenuItemProps, amount: number) =>
  Array.from({ length: amount }, (x, i) => i).map((el, i) => (
    <MenuItem {...props} key={el}>
      <Typography>Option {i + 1}</Typography>
    </MenuItem>
  ));

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  triggerComponent: <Button disableRippleEffect>Open Menu</Button>,
  children: generateMenuItems({}, 3)
};

export const Positioned = Template.bind({});
Positioned.args = {
  ...Default.args,
  triggerComponent: (
    <Button disableRippleEffect style={{ minWidth: '1rem' }}>
      <MoreHorizontalIcon />
    </Button>
  ),
  children: [
    <MenuItem key={1} elementBefore={<EditIcon size="small" />}>
      <Typography>Edit</Typography>
    </MenuItem>,
    <MenuItem key={2} disabled divider>
      <Typography>Move</Typography>
    </MenuItem>,
    <MenuItem key={3} elementBefore={<DeleteIcon size="small" />} color={'danger'}>
      <Typography>Delete</Typography>
    </MenuItem>
  ],
  minWidth: '10rem',
  position: 'right-start'
};

export const Compact = Template.bind({});
Compact.args = {
  triggerComponent: (
    <Button size="small" disableRippleEffect>
      Open Menu
    </Button>
  ),
  compact: true,
  children: generateMenuItems({}, 6)
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  ...Default.args,
  maxHeight: '20rem',
  minWidth: '15rem',
  children: generateMenuItems({}, 30)
};

const SelectedTemplate: Story<MenuProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  const createClickHandler = (index: number) => () => {
    setSelectedItem(index);
  };

  return (
    <Menu {...args}>
      <MenuItem key={1} selected={selectedItem === 0} onClick={createClickHandler(0)}>
        <Typography>Option 1</Typography>
      </MenuItem>

      <MenuItem key={2} selected={selectedItem === 1} onClick={createClickHandler(1)}>
        <Typography>Option 2</Typography>
      </MenuItem>

      <MenuItem key={3} selected={selectedItem === 2} onClick={createClickHandler(2)}>
        <Typography>Option 3</Typography>
      </MenuItem>
    </Menu>
  );
};

export const SelectedOption = SelectedTemplate.bind({});
SelectedOption.args = {
  triggerComponent: <Button disableRippleEffect>Open Menu</Button>
};
