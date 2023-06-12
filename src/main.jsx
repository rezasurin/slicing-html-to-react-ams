import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'rsuite/dist/rsuite.min.css';
import './index.scss'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import { ViewProvider } from './context/ViewContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </React.StrictMode>,
)
