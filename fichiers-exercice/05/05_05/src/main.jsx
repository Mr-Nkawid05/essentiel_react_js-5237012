import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodosProvider from './context.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <TodosProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TodosProvider>,
)
