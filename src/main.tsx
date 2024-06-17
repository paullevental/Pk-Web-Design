import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './css/NavBar.css'
import './css/Footer.css'
import './css/home.css'
import './css/global.css'
import './css/Fonts.css'
import './css/about.css'
import './css/pricing.css'
import './css/contact.css'
import './css/animations.css'
import './css/cubAnimation.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


