import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Accommodation from './components/accommodation/accommodation';
import ErrorPage from './components/error/error';
import AppLayout from './components/layout/layout'; 
import './index.scss';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'about', element: <About /> },
      { path: 'accommodation/:id', element: <Accommodation /> },
      { path: 'error', element: <ErrorPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
