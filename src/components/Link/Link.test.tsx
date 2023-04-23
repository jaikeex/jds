import React from 'react';
import { render, screen } from 'test-utils';
import Link from './Link';
import '@testing-library/jest-dom';

describe('Link', () => {
  it('should render children correctly', () => {
    render(<Link href="https://example.com">Example Link</Link>);
    expect(screen.getByTestId('jds-link')).toBeInTheDocument();
  });

  it('should have the correct href attribute', () => {
    render(<Link href="https://example.com">Example Link</Link>);
    expect(screen.getByTestId('jds-link')).toHaveAttribute('href', 'https://example.com');
  });

  it('should open in the same window by default', () => {
    render(<Link href="https://example.com">Example Link</Link>);
    expect(screen.getByTestId('jds-link')).not.toHaveAttribute('target', '_blank');
    expect(screen.getByTestId('jds-link')).not.toHaveAttribute('rel', 'noreferrer');
  });

  it('should open in a new window when openInNew is true', () => {
    render(
      <Link href="https://example.com" openInNew>
        Example Link
      </Link>
    );
    expect(screen.getByTestId('jds-link')).toHaveAttribute('target', '_blank');
    expect(screen.getByTestId('jds-link')).toHaveAttribute('rel', 'noreferrer');
  });

  it('should have the correct underline style for "allways"', () => {
    render(
      <Link href="https://example.com" underline="allways">
        Example Link
      </Link>
    );
    expect(screen.getByTestId('jds-link')).toHaveStyle('text-decoration-line: underline');
  });

  it('should have the correct underline style for "hover"', () => {
    render(
      <Link href="https://example.com" underline="hover">
        Example Link
      </Link>
    );
    expect(screen.getByTestId('jds-link')).toHaveStyle('text-decoration-line: none');
  });

  it('should have the correct underline style for "none"', () => {
    render(
      <Link href="https://example.com" underline="none">
        Example Link
      </Link>
    );
    expect(screen.getByTestId('jds-link')).toHaveStyle('text-decoration-line: none');
  });
});
