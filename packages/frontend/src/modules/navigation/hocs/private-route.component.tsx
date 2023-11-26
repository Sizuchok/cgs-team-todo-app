import { useLayoutEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGetMe } from '../../auth/hooks/get-me.hook';
import LoadingOverlay from '../../common/components/loading-overlay/loading-overlay.component';
import { APP_KEYS } from '../../common/consts';

const PrivateRoute = () => {
  const location = useLocation();

  const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN);

  const { isFetching, refetch } = useGetMe();

  useLayoutEffect(() => {
    refetch();
  }, [location.pathname]);

  const getContent = () => {
    if (!token) {
      return (
        <Navigate
          to={`/${APP_KEYS.ROUTER_KEYS.AUTH}/${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`}
          state={{ from: location }}
        />
      );
    }

    if (isFetching) {
      return <LoadingOverlay vh />;
    }

    return <Outlet />;
  };

  return getContent();
};

export default PrivateRoute;
