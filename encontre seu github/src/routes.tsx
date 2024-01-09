import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Home from './pages/Main'
import Repositorio from './pages/Repositorio'
import Error from './components/Error/index'
import Sobre from './pages/Sobre'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/repositorio/:name",
        element: <Repositorio/>
      },
      {
        path: "/sobre",
        element: <Sobre/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
