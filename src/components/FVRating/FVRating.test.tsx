import React from 'react';
import { render, screen } from '@testing-library/react';
import FVRating from '.';

describe('FVRating component', () => {
  it('should render with count', () => {
    render(<FVRating count={120} rate={4} />);
    const count = screen.getByText(/120/i);

    expect(count).toBeInTheDocument();
  });

  it('should render a great rating', () => {
    const { container } = render(<FVRating count={120} rate={5} />);
    const fullStars = container.querySelectorAll('[data-icon="star"][data-prefix="fas"]');

    expect(fullStars.length).toBe(5);
  });

  it('should render a mediocre rating', () => {
    const { container } = render(<FVRating count={120} rate={2.5} />);

    const emptyStars = container.querySelectorAll('[data-icon="star"][data-prefix="far"]');
    const halfStars = container.querySelectorAll('[data-icon="star-half-stroke"]');
    const fullStars = container.querySelectorAll('[data-icon="star"][data-prefix="fas"]');

    expect(emptyStars.length).toBe(2);
    expect(halfStars.length).toBe(1);
    expect(fullStars.length).toBe(2);
  });

  it('should render a bad rating', () => {
    const { container } = render(<FVRating count={120} rate={0} />);
    const emptyStars = container.querySelectorAll('[data-icon="star"][data-prefix="far"]');

    expect(emptyStars.length).toBe(5);
  });
});
