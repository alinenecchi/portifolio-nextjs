import React from 'react';
import { render } from '@testing-library/react';
import Comp from '..';

it('renders with the correct container className', () => {
  const { container } = render(<Comp />);
  expect(container.firstChild).toHaveClass('molecule__footer-container ');
});
