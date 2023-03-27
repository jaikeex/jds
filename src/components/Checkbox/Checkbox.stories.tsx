import React, { useState } from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { CheckboxProps } from './Checkbox';
import Checkbox from './Checkbox';
import { HeartIcon, HeartIconOutlined } from 'components/icons';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Checkbox />
    <Checkbox defaultChecked />
    <Checkbox disabled />
    <Checkbox disabled defaultChecked />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

const SizesTemplate: Story<CheckboxProps> = () => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
    <Checkbox size="small" defaultChecked />
    <Checkbox size="medium" defaultChecked />
    <Checkbox size="large" defaultChecked />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const ColorsTemplate: Story<CheckboxProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Checkbox defaultChecked color="primary" />
    <Checkbox defaultChecked color="secondary" />
    <Checkbox defaultChecked color="success" />
    <Checkbox defaultChecked color="error" />
    <Checkbox defaultChecked color="warning" />
    <Checkbox defaultChecked color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};

const IconTemplate: Story<CheckboxProps> = () => (
  <Checkbox icon={<HeartIconOutlined size={32} />} iconChecked={<HeartIcon size={32} color="error" />} />
);

export const Icon = IconTemplate.bind({});
Icon.args = {};

const LabelTemplate: Story<CheckboxProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Checkbox label="Checkbox label 1" />
    <Checkbox label="Checkbox label 2" defaultChecked />
    <Checkbox label="Checkbox label 3" disabled />
    <Checkbox label="Checkbox label 4" disabled defaultChecked />
  </div>
);

export const Label = LabelTemplate.bind({});
Label.args = {};

const LabelsTemplate: Story<CheckboxProps> = () => (
  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
    <Checkbox defaultChecked labelPosition="right" label="Right" />
    <Checkbox defaultChecked labelPosition="bottom" label="Bottom" />
    <Checkbox defaultChecked labelPosition="left" label="Left" />
    <Checkbox defaultChecked labelPosition="top" label="Top" />
  </div>
);

export const LabelPositions = LabelsTemplate.bind({});
LabelPositions.args = {};

const GroupTemplate: Story<CheckboxProps> = () => {
  const [checked, setChecked] = useState<boolean[]>([true, false, false]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox
        checked={checked[0] && checked[1] && checked[2]}
        indeterminate={[...new Set(checked)].length > 1}
        onChange={(event) => setChecked([event.target.checked, event.target.checked, event.target.checked])}
        label="Parent"
      />
      <Checkbox
        checked={checked[0]}
        onChange={(event) => setChecked([event.target.checked, checked[1], checked[2]])}
        label="Option 1"
        style={{ marginLeft: '1.5rem' }}
      />
      <Checkbox
        checked={checked[1]}
        onChange={(event) => setChecked([checked[0], event.target.checked, checked[2]])}
        label="Option 2"
        style={{ marginLeft: '1.5rem' }}
      />
      <Checkbox
        checked={checked[2]}
        onChange={(event) => setChecked([checked[0], checked[1], event.target.checked])}
        label="Option 3"
        style={{ marginLeft: '1.5rem' }}
      />
    </div>
  );
};
export const CheckboxGroup = GroupTemplate.bind({});
CheckboxGroup.args = {
  ...Default.args
};
