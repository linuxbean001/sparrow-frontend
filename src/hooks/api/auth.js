import { useCookies } from 'react-cookie';

import API from '../../api';
import {
  AuthContainer,
  UserContainer,
  ClientContainer,
  PagesContainer,
} from '../../providers';

const useAuthenticateUser = () => {
  const {
    setUserAuthenticated,
    updateAccessToken,
  } = AuthContainer.useContainer();
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const { setUserPopulated, setUser } = UserContainer.useContainer();

  const authenticateUser = async (username, password, strategy) => {
    const response = await API.authentication.create(
      username,
      password,
      strategy
    );
    const { accessToken } = response;
    setUserAuthenticated(true);
    updateAccessToken(accessToken);
    API.accessToken = accessToken;
    setUserPopulated(true);
    setUser(response.user);
    setCookie('accessToken', response.accessToken);
  };

  return authenticateUser;
};

const useSignOut = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const { resetUserState } = UserContainer.useContainer();
  const { resetAuthState } = AuthContainer.useContainer();
  const { resetClientState } = ClientContainer.useContainer();
  const { resetPageState } = PagesContainer.useContainer();

  const signOut = () => {
    removeCookie('accessToken');
    resetAuthState();
    resetClientState();
    resetUserState();
    resetPageState();
  };

  return signOut;
};

const useIsAuthenticated = () => {
  const [cookies] = useCookies(['accessToken']);
  const {
    setUserAuthenticated,
    updateAccessToken,
  } = AuthContainer.useContainer();

  const isAuthenticated = () => {
    const isAccessTokenAvailable = !!cookies.accessToken;
    setUserAuthenticated(isAccessTokenAvailable);
    if (isAccessTokenAvailable) {
      const { accessToken } = cookies;
      API.accessToken = accessToken;
      updateAccessToken(accessToken);
    }
    return isAccessTokenAvailable;
  };

  return isAuthenticated;
};

export { useAuthenticateUser, useSignOut, useIsAuthenticated };
