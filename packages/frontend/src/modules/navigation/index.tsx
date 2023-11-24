import { Navigate, createBrowserRouter } from 'react-router-dom';
import ActivateUserPage from '../auth/pages/activate-user-page.components';
import ForgotPasswordPage from '../auth/pages/forgot-password-page.component';
import ProfilePage from '../user/pages/me-profile-page.component';
import ResetPasswordPage from '../auth/pages/reset-password-page.component';
import SignInPage from '../auth/pages/sign-in-page.component';
import SignUpPage from '../auth/pages/sign-up-page.component';
import { APP_KEYS } from '../common/consts';
import TodosPage from '../todo/todos-page.container';
import PrivateRoute from './hocs/private-route.component';
import PublicRoute from './hocs/public-route.component';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={APP_KEYS.BACKEND_KEYS.TODOS} />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: APP_KEYS.ROUTER_KEYS.TODOS,
        element: <TodosPage />
      },
      {
        path: APP_KEYS.ROUTER_KEYS.ME,
        element: <ProfilePage />
      }
    ]
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: APP_KEYS.ROUTER_KEYS.AUTH,
        children: [
          {
            path: APP_KEYS.BACKEND_KEYS.R_SIGN_UP,
            element: <SignUpPage />
          },
          {
            path: APP_KEYS.BACKEND_KEYS.R_ACTIVATE,
            element: <ActivateUserPage />
          },
          {
            path: APP_KEYS.BACKEND_KEYS.R_SIGN_IN,
            element: <SignInPage />
          },
          {
            path: APP_KEYS.BACKEND_KEYS.R_FORGOT_PASSWORD,
            element: <ForgotPasswordPage />
          },
          {
            path: APP_KEYS.BACKEND_KEYS.R_RESET_PASSWORD,
            element: <ResetPasswordPage />
          }
        ]
      }
    ]
  }
]);
