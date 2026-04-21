import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChatInterface from '../ChatInterface';

// Mock the Gemini service
vi.mock('../../services/gemini', () => ({
  sendMessage: vi.fn().mockResolvedValue('Mocked response from assistant'),
}));

describe('ChatInterface Component', () => {
  it('renders the chat header and initial message', () => {
    render(<ChatInterface />);
    expect(screen.getByText('Ask the Assistant')).toBeInTheDocument();
    expect(screen.getByText(/Hello! I am your Election Process Assistant/i)).toBeInTheDocument();
  });

  it('allows user to type in the input field', () => {
    render(<ChatInterface />);
    const input = screen.getByPlaceholderText(/What happens during a primary election/i);
    fireEvent.change(input, { target: { value: 'How does voting work?' } });
    expect(input.value).toBe('How does voting work?');
  });

  it('disables submit button when input is empty', () => {
    render(<ChatInterface />);
    const button = screen.getByLabelText('Send message');
    expect(button).toBeDisabled();
  });
});
