import React, { useCallback, useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import List, { ListProps } from './List';
import ListItem, { ListItemProps } from '../ListItem/ListItem';
import { Typography } from '@components/Typography';
import Sheet from '../Sheet/Sheet';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';
import { EmailIcon } from '../icons/social/EmailIcon/index';

export default {
  title: 'List',
  component: List
} as ComponentMeta<typeof List>;

const generateListItems = (props: ListItemProps) => {
  return [1, 2, 3, 4].map(el => <ListItem {...props} key={el} />);
};

const Template: Story<ListProps> = args => {
  return (
    <div style={{ width: '300px' }}>
      <Sheet level={6}>
        <List {...args} />
      </Sheet>
    </div>
  );
};

const TemplateCheckbox: Story<ListProps> = args => {
  const [checked, setChecked] = useState<boolean[]>([
    true,
    false,
    false,
    false
  ]);

  const checkboxHandler = (value: number) => {
    const newState = checked.map((item, index) =>
      index === value ? !item : item
    );
    setChecked(newState);
  };

  return (
    <div style={{ width: '300px' }}>
      <Sheet level={6}>
        <List {...args}>
          {[0, 1, 2, 3].map(el => (
            <ListItem
              clickable={true}
              onClick={() => checkboxHandler(el)}
              elementBefore={<Checkbox checked={checked[el]} />}
            >
              <Typography>Checkable Item {el + 1}</Typography>
            </ListItem>
          ))}
        </List>
      </Sheet>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: generateListItems({
    children: <Typography>This is a list item</Typography>
  })
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  ...Default.args,
  children: generateListItems({
    divider: true,
    children: <Typography>This is a list item</Typography>
  })
};

export const ClickableItems = Template.bind({});
ClickableItems.args = {
  ...Default.args,
  children: generateListItems({
    clickable: true,
    children: <Typography>This is a list item</Typography>
  })
};

export const WithIconButton = Template.bind({});
WithIconButton.args = {
  ...Default.args,
  children: generateListItems({
    elementAfter: (
      <IconButton color="success">
        <EmailIcon />
      </IconButton>
    ),
    children: <Typography>This is a list item</Typography>
  })
};

export const Compact = Template.bind({});
Compact.args = {
  ...Default.args,
  compact: true
};

export const CompactWithIcons = Template.bind({});
CompactWithIcons.args = {
  ...Default.args,
  compact: true,
  children: generateListItems({
    elementBefore: (
      <IconButton size="small">
        <EmailIcon />
      </IconButton>
    ),
    children: <Typography>This is a list item</Typography>
  })
};

export const WithCheckbox = TemplateCheckbox.bind({});
WithCheckbox.args = {};
