import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import './stories.scss';
import Tooltip, { TooltipProps } from '.';
import Button from '@components/Button';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: Story<TooltipProps> = args => (
  <div className="container">
    <div className="item item--1">
      <Tooltip {...args} position="top-start">
        <Button onClick={() => console.log('BUTTON CLICKED')}>top-start</Button>
      </Tooltip>
    </div>
    <div className="item item--2">
      <Tooltip {...args} position="top">
        <Button>top</Button>
      </Tooltip>
    </div>
    <div className="item item--3">
      <Tooltip {...args} position="top-end">
        <Button>top-end</Button>
      </Tooltip>
    </div>
    <div className="item item--4">
      <Tooltip {...args} position="right-start">
        <Button>right-start</Button>
      </Tooltip>
    </div>
    <div className="item item--5">
      <Tooltip {...args} position="right">
        <Button>right</Button>
      </Tooltip>
    </div>
    <div className="item item--6">
      <Tooltip {...args} position="right-end">
        <Button>right-end</Button>
      </Tooltip>
    </div>
    <div className="item item--7">
      <Tooltip {...args} position="bottom-end">
        <Button>bottom-end</Button>
      </Tooltip>
    </div>
    <div className="item item--8">
      <Tooltip {...args} position="bottom">
        <Button>bottom</Button>
      </Tooltip>
    </div>
    <div className="item item--9">
      <Tooltip {...args} position="bottom-start">
        <Button>bottom-start</Button>
      </Tooltip>
    </div>
    <div className="item item--10">
      <Tooltip {...args} position="left-end">
        <Button>left-end</Button>
      </Tooltip>
    </div>
    <div className="item item--11">
      <Tooltip {...args} position="left">
        <Button>left</Button>
      </Tooltip>
    </div>
    <div className="item item--12">
      <Tooltip {...args} position="left-start">
        <Button>left-start</Button>
      </Tooltip>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Tooltip'
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  content: 'Tooltip',
  appearance: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  content: 'Tooltip',
  appearance: 'danger'
};

export const LargeText = Template.bind({});
LargeText.args = {
  ...Default.args,
  size: 'long-text',
  content: (
    <span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce suscipit
      libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a,
      interdum id, felis. Proin mattis lacinia justo. Maecenas fermentum, sem in
      pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio
      a lectus.
    </span>
  )
};

export const LargeTextDanger = Template.bind({});
LargeTextDanger.args = {
  ...Default.args,
  size: 'long-text',
  appearance: 'danger',
  content: (
    <span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce suscipit
      libero eget elit. Nulla turpis magna, cursus sit amet, suscipit a,
      interdum id, felis. Proin mattis lacinia justo. Maecenas fermentum, sem in
      pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio
      a lectus.
    </span>
  )
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  styles: { width: '180px' },
  content: 'This box is 180px wide'
};
