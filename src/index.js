import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { StateProvider } from './services/StateProvider'
import reducer, { initialState } from './services/Reducer'

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
        <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

