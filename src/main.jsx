import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screens/Home/Home'
import './assets/styles/_index.scss'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
)
