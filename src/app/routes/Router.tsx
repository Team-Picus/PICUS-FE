import { createBrowserRouter } from 'react-router';
import { RootLayout } from '@app/layout';
import { HomePage } from '@pages/home';
import { ExpertMainPage } from '@pages/expert/ui/ExpertMainPage.tsx';
import { ExpertDetailPage } from '@pages/profile';
import { MyPage } from '@pages/my';

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
  },
  {
    path: '/profile/:expertId',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ExpertDetailPage />,
      },
    ],
  },
  {
    path: '/my',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
]);
