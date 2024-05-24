import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'

import './index.css'
import { InitDataProvider } from './context/InitDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <InitDataProvider>
      <App />
    </InitDataProvider>
  </BrowserRouter>
)
