import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { CustomToastContainer } from './components/ui/toast.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <CustomToastContainer/>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
