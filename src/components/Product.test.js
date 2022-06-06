import React from 'react';
import { render, screen } from '../test-utils';
import Product from './Product'
import '@testing-library/jest-dom'

test('should render the product', () => {
    render (<Product
      id={2}
      category={"electronics"}
      title={"iPhone X"}
      image={"mobile.png"}
      price={"1000"}
      rating={{rate: "4"}}
    />)

    screen.getByText(/iphone x/i)
})