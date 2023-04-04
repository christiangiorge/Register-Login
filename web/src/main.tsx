import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'

import './global.css';

import AllowedAccess from './components/AllowedAccess';
import RouterError from './components/RouterError';
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';
import Registered from './components/Registered';
import ForgotPassword from './components/Forms/ForgotPassword';
import ChangePassword from './components/Forms/ChangePassword';
import ChangePasswordReady from './components/ChangePasswordReady';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/u",
    element: <AllowedAccess />,
    errorElement: <RouterError />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <RouterError />,
  },
  {
    path: "/registered",
    element: <Registered/>,
    errorElement: <RouterError />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
    errorElement: <RouterError />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword/>,
    errorElement: <RouterError />,
  },
  {
    path: "/changepasswordready",
    element: <ChangePasswordReady/>,
    errorElement: <RouterError />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)