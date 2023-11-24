import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Button from '../../common/components/button/button.component';
import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import LoadingOverlay from '../../common/components/loading-overlay/loading-overlay.component';
import { APP_KEYS } from '../../common/consts';
import AuthInfo from '../components/auth-info/auth-info.component';
import { useActivateAccount } from '../hooks/activate.hook';

const ActivateUserPage = () => {
  const { mutate, isError, isSuccess, isLoading } = useActivateAccount();

  const location = useLocation();

  const urlQueryParams = new URLSearchParams(location.search);
  const token = urlQueryParams.get(APP_KEYS.PARAMS_KEYS.TOKEN);

  if (!token) {
    return <Navigate to={`../${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`} replace />;
  }

  const getContent = () => {
    if (isLoading) {
      return <LoadingOverlay vh />;
    }

    if (isSuccess) {
      return (
        <AuthLayout>
          <FormContainer>
            <AuthInfo heading="Account activated successfully" message="You can now manage todos">
              <Button type="link" stretch>
                <Link to={`/${APP_KEYS.ROUTER_KEYS.TODOS}`} replace>
                  Dashboard
                </Link>
              </Button>
            </AuthInfo>
          </FormContainer>
        </AuthLayout>
      );
    }

    if (isError) {
      return (
        <AuthLayout>
          <AuthInfo
            heading="Something went wrong"
            message="Looks like your activation link is invalid. Maku sure you've used the link from email we've sent to you"
            youCanNowCloseThisTab
          />
        </AuthLayout>
      );
    }
  };

  useEffect(() => {
    mutate({ token });
  }, []);

  return getContent();
};
export default ActivateUserPage;
