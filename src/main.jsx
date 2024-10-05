import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Candles from './Components/Candles/Candles'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path:'candles',
        element:<Candles/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element: <Contact/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
