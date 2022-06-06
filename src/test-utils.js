import React from 'react'
import {render} from '@testing-library/react'
import { StateProvider } from './services/StateProvider'
import reducer, { initialState } from './services/Reducer'
import { BrowserRouter } from 'react-router-dom'


const AllTheProviders = ({children}) => {
  let init = {
    basket: [
      {
        category: "electronics",
        title: "iPhone X",
        image: "mobile.png",
        price: "1000",
        rate: "4",
        count: "120",
        quant: "1"
      }
    ]
  }
  return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </StateProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}