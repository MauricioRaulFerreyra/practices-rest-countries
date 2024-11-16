import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'

//* https://restcountries.com/v3.1/all
//* https://restcountries.com/#endpoints-all   

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ThemeProvider>
  </Provider>
)
