import React from 'react';
import {render} from '../test-utils'
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CartProduct from './CartProduct'

test('should render', () => {
  render (<CartProduct id={2}
    category={"electronics"}
    title={"iPhone X"}
    image={"mobile.png"}
    price={"1000"}
    rate={"4"}
    count={"120"}
    quant={"1"} />)

  screen.getByText(/iphone/i)
})



