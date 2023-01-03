import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Clock from './components/ClassClock'
import ClockComponent from './components/Clock'
import './index.css'
ClockComponent


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Clock></Clock> */}
    <ClockComponent></ClockComponent>
  </React.StrictMode>
)
