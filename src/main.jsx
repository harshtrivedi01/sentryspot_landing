import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Slider from './Component/Home/Slider.jsx'
import Slider_details from './Component/Home/Slider_details.jsx'
import Login from './Component/Login/Login.jsx'
const route =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"slide/:id",
        element:<Slider_details/>
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={route}/>
    {/* <App /> */}
    
  </React.StrictMode>,
)
