import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { ButtonGroupProps } from '.';
import { ButtonGroup } from '.';
import { Button } from 'components/Button';

export default {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof ButtonGroup>;

const Template: Story<ButtonGroupProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <ButtonGroup appearance="filled">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
    <ButtonGroup appearance="outlined">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
    <ButtonGroup appearance="subtle">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  </div>
);

export const ButtonVariants = Template.bind({});
ButtonVariants.args = {};

const VerticalTemplate: Story<ButtonGroupProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <ButtonGroup orientation="vertical" appearance="filled">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" appearance="outlined">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" appearance="subtle">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>
    </div>
  </div>
);

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {};

const ColorsTemplate: Story<ButtonGroupProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <ButtonGroup color="success" appearance="filled">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup color="success" appearance="outlined">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup color="success" appearance="subtle">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <ButtonGroup color="error" appearance="filled">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup color="error" appearance="outlined">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup color="error" appearance="subtle">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <ButtonGroup color="warning" appearance="filled">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup color="warning" appearance="outlined">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup color="warning" appearance="subtle">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
    </div>
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};
