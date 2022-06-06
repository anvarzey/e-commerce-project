  import React from 'react';
  import { render, screen } from '@testing-library/react';
  import '@testing-library/jest-dom'
  import App from './App'

  test('should render without crashing', () => {
    render(<App />);

    expect(screen.getByText('Plenty')).toBeInTheDocument()
  })
