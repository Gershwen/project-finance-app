import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './sidebar';

describe('Sidebar', () => {
  it('shows Overview as default active item', () => {
    render(<Sidebar />);
    expect(screen.getByText('Overview')).toHaveClass('text-gray-900');
  });

  it('updates active item when Budgets is clicked', () => {
    render(<Sidebar />);
    const budgets = screen.getByText('Budgets');
    fireEvent.click(budgets);
    expect(budgets).toHaveClass('text-gray-900');
  });

  it('toggles collapse state when clicking Minimize', () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByLabelText('Minimize Menu');
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveClass('flex gap-4 cursor-pointer align-middle group mb-12 mt-4 py-4 px-8 text-left');
  });
});


