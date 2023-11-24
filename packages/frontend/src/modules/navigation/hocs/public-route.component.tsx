import { Navigate, Outlet } from 'react-router-dom';
import { APP_KEYS } from '../../common/consts';

const PublicRoute = () => {
  const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN);

  return !token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
