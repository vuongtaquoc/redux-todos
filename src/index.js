import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import App from './components/App'
import store from './store'

render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('react'),
  () => console.log('ok')
)
