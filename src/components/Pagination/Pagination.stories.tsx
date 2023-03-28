import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';

export default {
  title: 'Design System/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} appearance="filled" />
    <Pagination {...args} appearance="outlined" />
    <Pagination {...args} appearance="subtle" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  defaultPage: 5,
  siblingCount: 1
};

const ColorsTemplate: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} color="primary" />
    <Pagination {...args} color="secondary" />
    <Pagination {...args} color="success" />
    <Pagination {...args} color="error" />
    <Pagination {...args} color="warning" />
    <Pagination {...args} color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  ...Default.args
};

const SizesTemplate: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} size="small" />
    <Pagination {...args} size="medium" />
    <Pagination {...args} size="large" />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  ...Default.args
};
