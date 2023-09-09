import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page'
import GlobalStyle from "./stylesGlobal";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
