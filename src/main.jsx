import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TabUi from '@/pages/TabUi'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/tabs',
    element: <TabUi />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
