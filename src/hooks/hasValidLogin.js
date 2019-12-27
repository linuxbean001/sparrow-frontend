import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useHistory, useLocation } from 'react-router-dom';

import { ApplicationContainer, AuthContainer } from '../providers';
import { useIsAuthenticated } from './api/auth';

const useHasValidLogin = callback => {
  const { setApplicationLoaded } = ApplicationContainer.useContainer();
  const { setUserAuthenticated } = AuthContainer.useContainer();
  const isAuthenticated = useIsAuthenticated();
  const [cookies] = useCookies(['accessToken']);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (isAuthenticated()) {
      setUserAuthenticated(true);
      if (typeof callback === 'function') {
        callback();
      }
    } else if (!isAuthenticated()) {
      if (location.pathname !== '/signup') {
        history.replace('/login');
      }
      setApplicationLoaded(true);
    }
  }, [cookies.accessToken]);
};

export default useHasValidLogin;
