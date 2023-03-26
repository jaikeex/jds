import React, { useState } from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { AccordionProps } from './Accordion';
import Accordion from './Accordion';
import { Typography } from 'components/Typography';
import { SettingsIconOutlined } from 'components/icons';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia omnis quos debitis tenetur ipsam illo, quasi ab! Ducimus accusantium quaerat numquam ut laborum quos velit et aliquid laudantium provident doloresalias impedit saepe est porro, nesciunt, cumque aperiam asperiores voluptatibus mollitia. Fugiat repellendussapiente aspernatur dolor. ';

export default {
  title: 'Design System/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: Story<AccordionProps> = (args) => (
  <div style={{ width: '40rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Accordion {...args} title={'Accordion 1'}>
      <div>
        <Typography variant="body3">{text}</Typography>
      </div>
    </Accordion>
    <Accordion {...args} divider title={'Accordion 2'} titleIcon={<SettingsIconOutlined size={24} />}>
      <div>
        <Typography variant="body3">{text}</Typography>
      </div>
    </Accordion>
    <Accordion {...args} title={'Disabled'} disabled />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion'
};

const ControlledTemplate: Story<AccordionProps> = (args) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const accordionExpandHandler = (acc: string) => (isExpanded: boolean) => {
    isExpanded && setExpanded(acc);
  };

  return (
    <div style={{ width: '40rem' }}>
      <Accordion
        {...args}
        title={'Accordion 1'}
        expanded={expanded === 'acc1'}
        onChange={accordionExpandHandler('acc1')}
        sharpCorners
      >
        <div>
          <Typography variant="body3">{text}</Typography>
        </div>
      </Accordion>
      <Accordion
        {...args}
        title={'Accordion 2'}
        titleIcon={<SettingsIconOutlined size={24} />}
        divider
        expanded={expanded === 'acc2'}
        onChange={accordionExpandHandler('acc2')}
        sharpCorners
      >
        <div>
          <Typography variant="body3">{text}</Typography>
        </div>
      </Accordion>
      <Accordion {...args} title={'Disabled'} disabled sharpCorners />
    </div>
  );
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {};
