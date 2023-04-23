import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import type { AccordionProps } from './Accordion';
import Accordion from './Accordion';

describe('Accordion', () => {
  const defaultProps: AccordionProps = {
    title: 'Test Accordion',
    children: <p>Accordion content</p>
  };

  const renderAccordion = (props: Partial<AccordionProps> = {}) => {
    const combinedProps = { ...defaultProps, ...props };
    return render(<Accordion {...combinedProps} />);
  };

  test('renders title', () => {
    renderAccordion();
    expect(screen.getByText('Test Accordion')).toBeInTheDocument();
  });

  test('renders content when expanded', () => {
    renderAccordion({ defaultExpanded: true });
    expect(screen.getByText('Accordion content')).toBeInTheDocument();
  });

  test('does not render content when collapsed', () => {
    renderAccordion();
    expect(screen.queryByText('Accordion content')).not.toBeInTheDocument();
  });

  test('toggles content on click', () => {
    renderAccordion();
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(screen.getByText('Accordion content')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(screen.queryByText('Accordion content')).not.toBeInTheDocument();
  });

  test('calls onChange when toggling', () => {
    const onChange = vi.fn();
    renderAccordion({ onChange });
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(true);
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  test('does not toggle when disabled', () => {
    renderAccordion({ disabled: true });
    fireEvent.click(screen.getByText('Test Accordion'));
    expect(screen.queryByText('Accordion content')).not.toBeInTheDocument();
  });

  test('renders divider when expanded and divider is true', () => {
    renderAccordion({ divider: true, defaultExpanded: true });
    const divider = screen.getByTestId('accordion-divider');
    expect(divider).toBeInTheDocument();
  });

  test('does not render divider when collapsed and divider is true', () => {
    renderAccordion({ divider: true });
    const divider = screen.queryByTestId('accordion-divider');
    expect(divider).not.toBeInTheDocument();
  });

  test('does not render divider when divider is false', () => {
    renderAccordion({ defaultExpanded: true });
    const divider = screen.queryByTestId('accordion-divider');
    expect(divider).not.toBeInTheDocument();
  });
});
