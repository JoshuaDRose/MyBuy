import { render, screen } from '@testing-library/react';
import Hero from '../hero';
import Navbar from '../navbar';

test('Navigation menu loads above hero', () => {
  render(<Navbar />);
  const link_dl = screen.getByText(/Download/i);
  const link_sv = screen.getByText(/Services/i);
  const link_ab = screen.getByText(/About/i);
  const link_ct = screen.getByText(/Contact/i);
  expect(link_dl).toBeInTheDocument();
  expect(link_sv).toBeInTheDocument();
  expect(link_ab).toBeInTheDocument();
  expect(link_ct).toBeInTheDocument();
});

test('Symbols and text loaded without corrupting', () => {
  render(<Hero />);
  const heroText = screen.getByText(/MyBuy/i);
  expect(heroText).toBeInTheDocument();
});
