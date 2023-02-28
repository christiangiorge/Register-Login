import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'

import './global.css';

import { Register } from './components/Forms/Register';
import Error from './components/RouterError';
import { SignIn } from './components/Forms/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)