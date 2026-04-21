import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Timeline from '../Timeline';

describe('Timeline Component', () => {
  it('renders the timeline header', () => {
    render(<Timeline />);
    expect(screen.getByText('Election Process Timeline')).toBeInTheDocument();
  });

  it('renders the correct number of timeline steps', () => {
    const { container } = render(<Timeline />);
    const listItems = container.querySelectorAll('.timeline-step');
    expect(listItems.length).toBe(7);
  });

  it('renders specific steps', () => {
    render(<Timeline />);
    expect(screen.getByText('Voter Registration')).toBeInTheDocument();
    expect(screen.getByText('Inauguration')).toBeInTheDocument();
  });
});
