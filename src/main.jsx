import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Context_provider } from './services/Context.jsx'

createRoot(document.getElementById('root')).render(
    
  <BrowserRouter>
    <Context_provider>

  <div><Toaster /> </div>
   <App />
   </Context_provider>

  </BrowserRouter>
   
)
