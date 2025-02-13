import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@app/layout';
import { HomePage } from '@pages/home';
import { ExpertMainPage } from '@pages/expert/ui/ExpertMainPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/expert',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ExpertMainPage />,
      },
    ],
  }
]);
