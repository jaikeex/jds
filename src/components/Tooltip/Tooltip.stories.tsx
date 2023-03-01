import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import './Tooltip.stories.scss';
import type { TooltipProps } from './Tooltip';
import Tooltip from './Tooltip';
import { Button } from '@components/Button';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: Story<TooltipProps> = (args) => (
  <div className="story-container">
    <div className="story-item story-item--1">
      <Tooltip {...args} position="top-start">
        <Button onClick={() => console.log('BUTTON CLICKED')}>top-start</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--2">
      <Tooltip {...args} position="top">
        <Button>top</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--3">
      <Tooltip {...args} position="top-end">
        <Button>top-end</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--4">
      <Tooltip {...args} position="right-start">
        <Button>right-start</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--5">
      <Tooltip {...args} position="right">
        <Button>right</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--6">
      <Tooltip {...args} position="right-end">
        <Button>right-end</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--7">
      <Tooltip {...args} position="bottom-end">
        <Button>bottom-end</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--8">
      <Tooltip {...args} position="bottom">
        <Button>bottom</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--9">
      <Tooltip {...args} position="bottom-start">
        <Button>bottom-start</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--10">
      <Tooltip {...args} position="left-end">
        <Button>left-end</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--11">
      <Tooltip {...args} position="left">
        <Button>left</Button>
      </Tooltip>
    </div>
    <div className="story-item story-item--12">
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
  color: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  content: 'Tooltip',
  color: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  content: 'Tooltip',
  color: 'warning'
};

export const Focus = Template.bind({});
Focus.args = {
  ...Default.args,
  content: 'Tooltip',
  color: 'focus'
};

export const LargeText = Template.bind({});
LargeText.args = {
  ...Default.args,
  size: 'long-text',
  content: (
    <span>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce suscipit libero eget elit. Nulla turpis magna,
      cursus sit amet, suscipit a, interdum id, felis. Proin mattis lacinia justo. Maecenas fermentum, sem in pharetra
      pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.
    </span>
  )
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  style: { width: '180px' },
  content: 'This box is 180px wide'
};
