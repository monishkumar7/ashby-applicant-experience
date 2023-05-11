import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/globals.css';
import PageNotFound from './components/layout/PageNotFound';
import JobDescription from './pages/JobDescription';
import Opportunities from './pages/Opportunities';
import JobApplication from './pages/JobApplication';
import ApplicationSuccess from './pages/ApplicationSuccess';

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
  },
  {
    path: 'opportunity/:name/application/success',
    element: <ApplicationSuccess />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
