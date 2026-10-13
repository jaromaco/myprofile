import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GIS expert identity', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Javier Roma Corrales/i })).toBeInTheDocument();
  expect(document.querySelector('.hero__role')).toHaveTextContent(/Experto GIS/i);
  expect(document.querySelector('.site-header__brand')).toHaveTextContent('OikosGIS');
});
