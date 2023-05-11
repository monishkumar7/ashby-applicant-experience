import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/globals.css';
import PageNotFound from './components/layout/PageNotFound';
import JobDescription from './pages/JobDescription';
import Opportunities from './pages/Opportunities';
import JobApplication from './pages/JobApplication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Opportunities />,
    errorElement: <PageNotFound />
  },
  {
    path: 'opportunity/:name',
    element: <JobDescription />
  },
  {
    path: 'opportunity/:name/application',
    element: <JobApplication />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
