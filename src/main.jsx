import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login/index'
import Register from './components/Register/index'
import {TemplateLogin} from './templates/login'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '',
    element: <TemplateLogin />,
    children: [
      { 
        path: '/',
        element: <Login />,
      },

      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '/home',
    children: [
      {
        path:'',
        element: <p>welcome in home 0</p>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
);
