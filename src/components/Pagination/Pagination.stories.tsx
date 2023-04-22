import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { PaginationProps } from './Pagination';
import Pagination from './Pagination';

export default {
  title: 'Design System/Pagination',
  component: Pagination,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof Pagination>;

const Template: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} appearance="filled" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  defaultPage: 5,
  siblingCount: 1
};

const OutlinedTemplate: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} appearance="outlined" />
  </div>
);

export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {
  ...Default.args
};

const SubtleTemplate: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} appearance="subtle" />
  </div>
);

export const Subtle = SubtleTemplate.bind({});
Subtle.args = {
  ...Default.args
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

const SiblingsTemplate: Story<PaginationProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <Pagination {...args} siblingCount={2} />
  </div>
);
export const SiblingCount = SiblingsTemplate.bind({});
SiblingCount.args = {
  ...Default.args
};
