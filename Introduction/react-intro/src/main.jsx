import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import navBar from './components/navBar.jsx'

const newLocal = <navBar />
createRoot(document.getElementById('root')).render(
  <navBar/>
)
