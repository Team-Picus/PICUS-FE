import { RouterProvider } from 'react-router';
import { router } from '@app/routes/';

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};