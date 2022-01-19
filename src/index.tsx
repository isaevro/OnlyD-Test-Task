import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/global'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
