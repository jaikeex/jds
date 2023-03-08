import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TypographyProps } from './Typography';
import Typography from './Typography';

export default {
  title: 'Design System/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: Story<TypographyProps> = (args) => (
  <div style={{ maxWidth: '700px' }}>
    <Typography {...args} variant="h1">
      Heading 1
    </Typography>
    <Typography {...args} variant="h2">
      Heading 2
    </Typography>
    <Typography {...args} variant="h3">
      Heading 3
    </Typography>
    <Typography {...args} variant="h4">
      Heading 4
    </Typography>
    <Typography {...args} variant="h5">
      Heading 5
    </Typography>
    <Typography {...args} variant="h6">
      Heading 6
    </Typography>
    <Typography {...args} variant="subHeading1">
      Sub heading 1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur vitae diam non enim vestibulum
      interdum. Nulla est. Fusce wisi.
    </Typography>
    <Typography {...args} variant="subHeading2">
      Sub heading 2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur vitae diam non enim vestibulum
      interdum. Nulla est. Fusce wisi.
    </Typography>
    <Typography {...args} variant="body1">
      Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography {...args} variant="body2">
      Body 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography {...args} variant="body3">
      Body 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography {...args} variant="caption">
      Caption
    </Typography>
    <Typography {...args} variant="label">
      Label
    </Typography>
    <div style={{ marginBottom: '0.75rem' }} />
    <Typography {...args} variant="button">
      Button
    </Typography>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  gutterBottom: true
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  ...Default.args,
  noWrap: true,
  style: { width: '700px' }
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success'
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  color: 'error'
};
