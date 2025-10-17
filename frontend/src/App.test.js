import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PetCare Portal navbar brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/PetCare Portal/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders Home welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to PetCare Portal/i);
  expect(welcomeElement).toBeInTheDocument();
});
