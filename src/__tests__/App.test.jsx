import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders the main layout and components', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Election Process Explorer')).toBeInTheDocument();
    expect(screen.getByText('Election Process Timeline')).toBeInTheDocument();
    expect(screen.getByText('Ask the Assistant')).toBeInTheDocument();
  });
});
