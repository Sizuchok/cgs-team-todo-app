import { useNavigate } from 'react-router-dom';
import Button from '../../common/components/button/button.component';
import { FormContainer } from '../../common/components/containers/form-container/form-container.styled';
import AuthLayout from '../../common/components/layouts/auth-layout/auth-layout.component';
import { APP_KEYS } from '../../common/consts';
import { ProfileNavButtons } from '../components/profile-nav-buttons/profile-nav-buttons.styled';
import UpdateUserForm from '../forms/update-user-form.component';

// eslint-disable-next-line arrow-body-style
const ProfilePage = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN);
    navigate(`/${APP_KEYS.ROUTER_KEYS.AUTH}/${APP_KEYS.BACKEND_KEYS.R_SIGN_IN}`);
  };

  return (
    <AuthLayout>
      <FormContainer>
        <UpdateUserForm />
        <ProfileNavButtons>
          <Button stretch secondary type="button" title="Back" onClick={() => navigate(-1)} />
          <Button stretch secondary type="button" title="Log Out" onClick={logOut} />
        </ProfileNavButtons>
      </FormContainer>
    </AuthLayout>
  );
};
export default ProfilePage;
