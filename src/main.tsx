import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/globals.css';
import PageNotFound from './components/layout/PageNotFound';
import JobDescription from './pages/JobDescription';
import Opportunities from './pages/Opportunities';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Opportunities />,
    errorElement: <PageNotFound />
  },
  {
    path: 'opportunity/:opportunityName',
    element: <JobDescription />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
