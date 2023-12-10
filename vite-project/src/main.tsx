import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.css'


// React.StrictMode makes things update twice.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
