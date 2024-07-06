import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Pagess/Statistics/Statistics';
import AppliedJobs from './components/Pagess/AppliedJobs/AppliedJobs';
import Blogs from './components/Pagess/Blogs/Blogs';
import ErrorPage from './components/Pagess/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
