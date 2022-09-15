import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './contexts/cart.context'

import { store } from './store/store'

import App from './App'

import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
