import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import Search from '@/pages/search/Search';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES_CONFIG.home.path,
        element: <Home />,
      },
      {
        path: ROUTES_CONFIG.search.path,
        element: <Search />,
      },
    ],
  },
]);
